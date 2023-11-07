import express from "express";
import UserController from "../controllers/userController.js";
import CitysController from "../controllers/cityController.js";
import ExamController from "../controllers/examController.js";
import orderController from "../controllers/orderController.js";

class MainRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.indexUserConOrder);
    }
    async indexUserConOrder(req, res) {
        try {
            const users = await UserController.listUsers();
            let usuarios = [];
            users.map(user => {
                usuarios.push(user.dataValues)
            })
            const orders = await orderController.listOrderUser();
            usuarios.forEach(user => {
                orders.forEach(order => {
                    let ord = [];
                    order.forEach(or => {
                        if (user.id === or.patient_id) {
                            ord.push(or);
                        }
                    })
                    user.orders = ord;
                })
            });
            // console.log(usuarios);
            res.render('./index.pug', { usuarios });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener datos de usuarios y órdenes.' });
        }
    }
    getRouter() {
        return this.router;
    }


}

export default MainRouter;
