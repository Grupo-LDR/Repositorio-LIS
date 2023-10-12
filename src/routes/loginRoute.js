import Express from "express";
import authController from '../controllers/authController.js';
class LoginRoutes {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getLogin);
        this.router.post('/', this.createLogin);

    }
    getLogin(req, res) {

        res.sendFile('login.html', { root: './src/public' });
    }
    createLogin(req, res) {
        //  console.log(req.body);
        //aca podriair logica de login?

        res.sendFile('login.html', { root: './src/public' });
    }

    getRouter() {
        return this.router;
    }
}

export default LoginRoutes;