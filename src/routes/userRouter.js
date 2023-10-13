import Express from "express";
import { listarUsuarios } from "../controllers/user.js"; // Asegúrate de importar la función correctamente

class UserRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getUser);
        this.router.post('/', this.createUser);
    }

    async getUser(req, res, next) {
        try {
            const users = await listarUsuarios(); // Llama a tu función de controlador para obtener los usuarios
            res.render('usuarios', { users }); // Renderiza la vista 'usuarios' con los datos
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
