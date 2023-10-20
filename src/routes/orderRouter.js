import Express from "express";
import orderController from "../controllers/orderController.js";
class OrderRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getUser);
        this.router.post('/', this.createUser);

    }

    async getUser(req, res, next) {
        console.log('mierda');
        const usuarios = await orderController.crearNuevoRegistro();
        //const dataArray = usuarios.map(item => item.get({ plain: true }));
        // console.log(dataArray);
        res.render('usersView');
    }

    createUser(req, res, next) {
        res.send('Responder con POST user');
    }

    getRouter() {
        return this.router;
    }
}

export default OrderRouter;