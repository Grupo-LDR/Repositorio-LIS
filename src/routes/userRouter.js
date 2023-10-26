import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/cityController.js";
import Exam from "../models/examModel.js";
import config from "../config.js";
import ExamController from "../controllers/examController.js";
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

            // console.log(baseUrl);

            //            res.render('examsView.pug', { user });
            const exams = await ExamController.listExams();
            console.log(exams);
            // res.render('examsView.pug', { exams: exams });
            //            console.log(exams);
            res.render('orderNewView.pug', { employee_id: '2', user: user, exams: exams, baseUrl: baseUrl });
            //res.render('test_copy.pug', { user: user, examenes: exams });


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
            res.render('usersView.pug', { usuarios });
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
            //de editar, me muestre la lista y el usuario elija la ciudad desde el desplegable
            //            const nombreCiudad = user.City ? user.City.name : null;
            // console.log(user);
            const ciudades = await CitysController.listCitys();
            // console.log("CIUDADES: ->", ciudades[0].name, ' - ', ciudades[0].id)
            // console.log('ciudad--->>> ', ciudades[0]);
            let ciudad = ciudades[0];
            res.render('userEditView.pug', { user, ciudades: ciudades });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async getNewUser(req, res) {
        try {

            const citys = await CitysController.listCitys();
            res.render('userNewView.pug', { citys: citys });
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
            res.redirect(`/user/edit/${usuario.id}`)
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
            res.redirect('/user')
        } catch (error) {
            console.error('Error al crear un nuevo usuario:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    /*
    async createUser(req, res) {
            console.log("Ruta createUser ***");
            try {
            const usuario = req.body;
                await crearUsuario(usuario);
                console.trace("Usuario Creado -> EXITOSO");
                res.redirect('/main');
            } catch (error) {
                console.error('Error al crear un nuevo usuario:', error);
                res.status(500).send('Error interno del servidor');
            }
        }
        */
    getMenu(req, res) {
        res.render("menu");
    }
    getRouter() {
        return this.router;
    }
}
export default UserRouter;

