import Express from "express";
import User from "../models/userModel.js";
import authController from '../controllers/authController.js';
class LoginRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getLogin);
        this.router.post('/', this.postLogin);

    }
    async postLogin(req, res) {
        const { user, pass } = req.body;
        console.log('linea13');
        if (user === 'root@example.com' && pass === "1234") {
            console.log('INGRESÓ COMO ADMINISTRADOR');
            // Puedes almacenar información del usuario en la sesión aquí si es necesario.
            req.session.usuario = { email: 'root@example.com', role: 'admin', authenticated: true, access_auth: 8 };
            console.log(req.session)
            console.log(req.session.usuario)
            res.redirect('/');
            //            res.render('index.pug');
        } else {
            const usuario = await User.findOne({ where: { email: user } });
            console.log(usuario);
            if (usuario) {
                const passwordMatch = await authController.compararPass(pass, usuario.password);
                if (passwordMatch) {
                    console.log("ENTREE AL POST-LOGIN");
                    // Almacenar información del usuario en la sesión si es necesario.
                    req.session.usuario = { email: usuario.email, role: 'user' };
                    console.log(req.session.usuario)
                    //res.render('index.pug');
                    res.redirect('/');
                } else {
                    res.render("login.pug", { title: "Laboratorio" });
                }
            } else {
                res.render("login.pug", { title: "Laboratorio" });
            }
        }
    }

    getLogin(req, res) {

        res.render("login", { title: "Laboratorio" });
    }
    getRouter() {
        return this.router;
    }
}

export default LoginRouter;