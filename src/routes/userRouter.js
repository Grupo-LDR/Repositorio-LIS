import Express from "express";
import { listarUsuarios } from "../controllers/user.js";
class UserRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getUser);
        this.router.post('/', this.createUser);
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

    createUser(req, res, next) {
        res.send('Responder con POST user');
    }

    getRouter() {
        return this.router;
    }
}

export default UserRouter;
