import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/citysController.js";
import config from "../config.js";
class UserRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getUsers);
        this.router.get('/test', this.getTestUsers);
        this.router.get('/edit/:id', this.getEditUser);
        this.router.get('/new', this.getNewUser);
        this.router.post('/new', this.postNewUser);
        this.router.post('/edit/:id', this.postEditUser);
    }

    async getTestUsers(req, res) {
        try {
            const usuarios = await UserController.listUsers();
            res.render('usersViewTest.pug', { usuarios });
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
            const citys = await CitysController.listCitys();
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            res.render('userEditView.pug', { user: user, citys: citys });
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
            console.clear;
            console.log(req.body);
            const usuario = req.body;
            console.log(usuario.id);
            await UserController.updateUsuario(usuario);
            res.redirect('/user')

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

