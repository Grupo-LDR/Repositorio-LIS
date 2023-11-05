import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/cityController.js";
import ExamController from "../controllers/examController.js";
import orderController from "../controllers/orderController.js";
class UserRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.userConOrder);
        // this.router.get('/', this.getUsers);
        this.router.get('/edit/:id', this.getEditUser);
        this.router.get('/list/order', this.listOrder);
        this.router.get('/new', this.getNewUser);
        this.router.post('/new', this.postNewUser);
        this.router.post('/edit', this.postEditUser);//edita usuario
        //NEW
        this.router.get('/order/new/:id', this.getNewOrderUser);
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
                //                user.orders = [];
                orders.forEach(order => {
                    let ord = [];
                    order.forEach(or => {

                        if (user.id === or.patient_id) {
                            console.log('Igual');
                            ord.push(or);
                        }
                    })
                    user.orders = ord;
                })
            });
            //  console.log(orders);
            /*           usuarios.map(user => {
                           user.orders = [];
                           orders.map(order => {
                               let ordenes = [];
                               order.map(or => {
                                   if (user.id === or.patient_id) {
                                       console.log('Igual');
                                       user.orders.push(or);
                                   }
                               })
           
                           })
                       });
             */
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
            // validacion si usairo exite
            const user = await UserController.findUser(id);
            // verificacion
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            const orderData = {
                patient_id: id,
                employee_id: 2
            }
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);

            const baseUrl = req.protocol + '://' + req.get('host');
            const exams = await ExamController.listExams();
            res.render('./order/orderNewView.pug', { employee_id: '2', user: user, exams: exams, baseUrl: baseUrl, orderNewId: orderNewId });
            // res.status(200).json(user)
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
        try {
            const id = req.params.id;
            const user = await UserController.findUser(id);
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            //   console.log(user);
            const ciudades = await CitysController.listCitys();
            // console.log("CIUDADES: ->", ciudades[0].name, ' - ', ciudades[0].id)
            // console.log('ciudad--->>> ', ciudades[0]);
            //let ciudad = ciudades[0];
            res.render('./user/userEditView.pug', { user, ciudades: ciudades });
            //res.status(200).send(JSON.stringify(user));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async getNewUser(req, res) {
        try {

            const citys = await CitysController.listCitys();
            res.render('./user/userNewView.pug', { citys: citys });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    async postEditUser(req, res) {
        const usuario = req.body;

        try {

            //            const id=
            console.log(req.body);
            await UserController.updateUsuario(usuario);
            res.status(200).send('ok');
            //res.redirect('/user')
            //            res.redirect(`/user/edit/${usuario.id}`)
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
            if (error.name === "SequelizeValidationError") {
                // Si el error es una validación de Sequelize, devolvemos un JSON con los mensajes de error.
                const validationErrors = error.errors.map((err) => err.message);
                res.status(400).json({ error: "Error de validación", messages: validationErrors });
            } else {
                console.error('Error al crear un nuevo usuario:', error);
                // Para otros tipos de errores, puedes manejarlos según tu necesidad.
                res.status(500).json({ error: "Error interno del servidor" });
            }
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

