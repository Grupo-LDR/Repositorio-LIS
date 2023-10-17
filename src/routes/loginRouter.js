import Express from "express";
import authController from '../controllers/authController.js';
class LoginRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getLogin);
        this.router.post('/', this.postLogin);

    }
    postLogin(req, res) {
        const { user, pass } = req.body;
        if (user == 'root' && pass == '1234') {
            res.redirect('/usersView.pug');
        } else {
            res.render("login", { title: "Laboratorio" });
        }
        console.log(user, pass);
    }
    getLogin(req, res) {
        res.render("login", { title: "Laboratorio" });
    }
    getRouter() {
        return this.router;
    }
}

export default LoginRouter;