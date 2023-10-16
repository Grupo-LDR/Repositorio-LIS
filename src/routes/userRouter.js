import Express from "express";
import { listarUsuarios,crearUsuario } from "../controllers/user.js";
class UserRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/patient/search', this.getUser);
        this.router.post('/patient/add', this.createUser);
    }
    async getUser(req, res, next) {
        try {
            const users = await listarUsuarios(); 
            //renderizar la tabla de pacientes/usuarios
            res.render('menus/mainsPatient/searchPatient.pug', { users });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    async createUser(req, res) {
        console.log("Ruta createUser *****");
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

    getRouter() {
        return this.router;
    }
}

export default UserRouter;
