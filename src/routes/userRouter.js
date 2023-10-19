import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/cityController.js";
import config from "../config.js";
class UserRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getUsers);
        this.router.get('/edit/:id', this.getEditUser);
        this.router.get('/new', this.getNewUser);
        this.router.post('/new', this.postNewUser);
        this.router.post('/edit/:id', this.postEditUser);
    }
    /**
     *  responde peticion /users con listado de usuarios
     */
    async getUsers(req, res) {
        try {
            const usuarios = await UserController.listUsers();
            res.render('usersView.pug', { usuarios});
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
            const nombreCiudad = user.City ? user.City.name : null;
            const ciudades = await CitysController.listCitys();
            console.log("CIUDADES: ->"+ciudades[0].name)
            res.render('userEditView.pug', {user, nombreCiudad,ciudades});
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
            const idCity =req.params.usuario.idCity
            const city = await CitysController.findCity(idCity)
            const usuario = req.body;
            const cityId = req.body.cityId;
            console.log("ID CITY: -> "+idCity);
            console.log("CITY ID: -> "+cityId);
            usuario.city_id = cityId;
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

