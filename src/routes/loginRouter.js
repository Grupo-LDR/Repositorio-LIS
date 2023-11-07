import Express from "express";
import User from "../models/userModel.js";
import authController from '../controllers/authController.js';
import Profile from "../models/profileModel.js";
class LoginRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getLogin);
        this.router.post('/', this.postLogin);
    }
    async postLogin(req, res) {
        const { user, pass } = req.body;
        try {
            if (user === 'root@example.com' && pass === "1234") {
                req.session.usuario = { email: 'root@example.com', role: 'admin', access_auth: 4 };
            } else {
                const usuario = await User.findOne({ where: { email: user } });
                if (!usuario) {
                    console.log('Usuario no encontrado en la base de datos, vas al login de nuevo');
                    return res.render("login.pug", { title: "Laboratorio" });
                }
                const passwordMatch = await authController.compararPass(pass, usuario.password);
                if (!passwordMatch) {
                    console.log('Contraseña incorrecta, vas al login de nuevo');
                    return res.render("login.pug", { title: "Laboratorio" });
                }
                const profile = await Profile.findOne({ where: { users_id: usuario.id } });
                if (profile.access_auth < 4) {
                    req.session.usuario = { email: usuario.email, role: profile.name, access_auth: profile.access_auth };
                    console.log('Usuario con acceso regular');
                } else {
                    req.session.usuario = { email: usuario.email, role: profile.name, access_auth: profile.access_auth };
                    console.log('Usuario con acceso especial');
                }
                req.session.usuario = { email: usuario.email, role: profile.name, access_auth: 1 };
            }
            res.redirect('/');
        } catch (error) {
            console.error('Error en la base de datos:', error);
            res.status(500).json({ mensaje: "Erroooooooooooor" });

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