import Express from "express";
import authController from '../controllers/authController.js';
class LoginRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getLogin);
        this.router.post('/user', this.postLogin);

    }
    postLogin(req, res) {
        const { user, pass } = req.body;
        console.log("--------------->" + user)
        console.log("--------------->" + pass)
        if (user == 'root@example.com' && pass == '1234') {
            console.log("ENTREE AL POST-LOGIN")
            res.redirect('/user');
        } else {
            res.render("login", { title: "Laboratorio" });
        }
        console.log(user, pass);
    }
    getLogin(req, res) {
        console.log("ENTRE A GET LOGIN")
        console.log("Get Login ->" + req.body)
        res.render("login", { title: "Laboratorio" });
    }
    getRouter() {
        console.log("ENTRE A GET ROUTER")
        return this.router;
    }
}

export default LoginRouter;