import Express from "express";
import UserController from "../controllers/userController.js";
class UserRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getUser);
        this.router.post('/', this.createUser);

    }

    async getUser(req, res, next) {
        console.log('mierda');
        const usuarios = await UserController.listarUsuarios();
        //console.log(usuarios);
        //    usuarios.forEach(element => {
        //        console.log(element.dataValues);
        //    });
        const dataArray = usuarios.map(item => item.get({ plain: true }));
        // console.log(dataArray);
        res.render('usersView', { usuarios: dataArray });
        //res.send('Responder con GET users');
    }

    createUser(req, res, next) {
        res.send('Responder con POST user');
    }

    getRouter() {
        return this.router;
    }
}

export default UserRouter;