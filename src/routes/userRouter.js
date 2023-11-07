import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/cityController.js";
import ExamController from "../controllers/examController.js";
import orderController from "../controllers/orderController.js";
class UserRouter {
    constructor() {
        this.router = express.Router();
        /**version 2 */
        this.router.get('/', this.userConOrder);
        this.router.get('/editUser/:id/:employee', this.getEditUser);
        this.router.post('/editUser/:id/:employee', this.postEditUser);

        /** version 1 */
        // this.router.get('/', this.getUsers);
        this.router.get('/list/order', this.listOrder);
        this.router.get('/new', this.getNewUser);
        this.router.post('/new', this.postNewUser);
        //this.router.post('/edit', this.postEditUser);
        //NEW
        this.router.get('/order/new/:id/:empl_id', this.getNewOrderUser);
        this.router.get('/order/list/:id', this.listarOrdenPaciente);
        this.router.get('/userOrders', this.userConOrder);

    }


    async userConOrder(req, res) {
        try {
            const users = await UserController.listUsers();

            let usuarios = [];

            users.map(user => {
                usuarios.push(user.dataValues)
            })
            const orders = await orderController.listOrderUser();
            usuarios.forEach(user => {
                orders.forEach(order => {
                    let ord = [];
                    order.forEach(or => {
                        if (user.id === or.patient_id) {
                            ord.push(or);
                        }
                    })
                    user.orders = ord;
                })
            });
            console.log(usuarios);
            res.render('./user/usersView.pug', { usuarios });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener datos de usuarios y órdenes.' });
        }
    }

    async listOrder(req, res) {
        try {
            /**esto deberia pasar un id para filtrar */
            const ordenes = await orderController.ordenesPorUsuario()
            res.status(200).json(ordenes)
        } catch (error) {
            throw error;
        }
    }

    /**
     * @argument{id}
     */
    async getNewOrderUser(req, res) {

        try {
            const id = req.params.id;
            const empl_id = req.params.empl_id;

            // validacion si usairo exite
            const user = await UserController.findUser(id);
            // verificacion
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            const orderData = {
                patient_id: id,
                employee_id: parseInt(empl_id, 10)
            }
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);

            //  const baseUrl = req.protocol + '://' + req.get('host');
            //  const exams = await ExamController.listExams();
            // req.session[orderNewId.id] = {
            //     employee_id: empl_id,
            //     user: user,
            //     exams: exams,
            //     baseUrl: baseUrl,
            //     orderNewId: orderNewId.id
            // };


            res.redirect(`/order/edit/${user.id}/${orderNewId.id}/${empl_id}`);
            //res.render('./orderNewView.pug', { employee_id: empl_id, user: user, exams: exams, baseUrl: baseUrl, orderNewId: orderNewId.id });
            //res.status(200).json(user)
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    /**
     *  responde peticion /users con listado de usuarios
     */
    async getUsers(req, res) {
        try {
            const usuarios = await UserController.listUsers();
            //   console.log(usuarios);
            res.render('./user/usersView.pug', { usuarios });
            // res.status(200).send(JSON.stringify(usuarios))
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    /**
     *  responde peticion /users con listado de usuarios
     */
    async getEditUser(req, res) {
        console.log('linea112');
        try {
            const id = req.params.id;
            const employee_id = req.params.employee;
            const user = await UserController.findUser(id);
            console.log(user);
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            //   console.log(user);
            const ciudades = await CitysController.listCitys();

            // console.log("CIUDADES: ->", ciudades[0].name, ' - ', ciudades[0].id)
            // console.log('ciudad--->>> ', ciudades[0]);
            //let ciudad = ciudades[0];
            res.render('./userEditView.pug', { user, ciudades: ciudades, employee_id });
            //res.status(200).json(ciudades);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async getNewUser(req, res) {
        try {

            const citys = await CitysController.listCitys();
            res.render('./userNewView.pug', { citys: citys });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    async postEditUser(req, res) {
        const usuario = req.body;
        console.log(req.body);
        //  res.status(200).send('ok');
        //  return;

        try {

            //            const id=
            console.log(req.body);
            await UserController.updateUsuario(usuario);
            //     res.status(200).send('ok');
            res.redirect('/')
            //res.status(200).json(req.body);
        } catch (error) {
            console.clear;
            console.error('Error al obtener actualizar user:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async postNewUser(req, res) {
        try {
            console.clear;
            console.log(req.body);
            const usuario = req.body;
            await UserController.crearUsuario(usuario);
            console.trace("Usuario Creado -> EXITOSO");
            res.status(200).json(usuario);
        } catch (error) {
            //  if (error.name === "SequelizeValidationError") {
            // Si el error es una validación de Sequelize, devolvemos un JSON con los mensajes de error.
            //   const validationErrors = error.errors.map((err) => err.message);
            //   res.status(400).json({ error: "Error de validación", messages: validationErrors });
            //} else {
            console.error('Error al crear un nuevo usuario:', error);
            // Para otros tipos de errores, puedes manejarlos según tu necesidad.
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    // listar todas las ordenes de un usuario
    async listarOrdenPaciente(req, res) {
        try {
            const patient_id = req.params.id;
            console.log(patient_id)//esto da undefined desde la ruta
            //user/order/list/:id
            //porque no me trae el id del usuario
            // console.log(req.body)
            const ordenes = await orderController.listarRegistrosPorId(patient_id);
            res.status(200).json(ordenes);
        } catch (error) {
            console.error('Error al listar órdenes del usuario:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    getMenu(req, res) {
        res.render("menu");
    }
    getRouter() {

        return this.router;
    }
}
export default UserRouter;

