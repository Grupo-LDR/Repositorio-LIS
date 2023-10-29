import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/cityController.js";
import ExamController from "../controllers/examController.js";
import orderController from "../controllers/orderController.js";
class UserRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getUsers);
        this.router.get('/edit/:id', this.getEditUser);
        this.router.get('/new', this.getNewUser);
        this.router.post('/new', this.postNewUser);
        this.router.post('/edit/:id', this.postEditUser);
        //NEW
        this.router.get('/order/new/:id', this.getNewOrderUser);
        this.router.get('/order/list/:id', this.listarOrdenPaciente);
    }
    /**
     * @argument{id}
     */
    async getNewOrderUser(req, res) {
        try {
            const id = req.params.id;
            // validacion si usairo exite
            const user = await UserController.findUser(id);
            console.log(user);
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            const baseUrl = req.protocol + '://' + req.get('host');
            const exams = await ExamController.listExams();
            // res.render('./orders/orderNewView.pug', { employee_id: '2', user: user, exams: exams, baseUrl: baseUrl });
            res.status(200).json(user)
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
            console.log(usuarios);
            // res.render('./users/usersView.pug', { usuarios });
            res.status(200).json(usuarios)
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
            //aca la idea es que me haga una lista desplegable para que al momento
            //de editar, me muestre la lista y el usuario elija la ciudad desde edesplegable
            //            const nombreCiudad = user.City ? user.City.name : null;
            // console.log(user);
            const ciudades = await CitysController.listCitys();
            // console.log("CIUDADES: ->", ciudades[0].name, ' - ', ciudades[0].id)
            // console.log('ciudad--->>> ', ciudades[0]);
            let ciudad = ciudades[0];
            // res.render('./users/userEditView.pug', { user, ciudades: ciudades });
            res.status(200).json(user, ciudades)
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async getNewUser(req, res) {
        try {

            const citys = await CitysController.listCitys();
            res.render('./users/userNewView.pug', { citys: citys });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    async postEditUser(req, res) {
        try {
            const usuario = req.body;
            await UserController.updateUsuario(usuario);
            //res.redirect('/user')
            res.redirect(`/users/edit/${usuario.id}`)
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
            // console.log(patient_id)//esto da undefined desde la ruta
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

