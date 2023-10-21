import Express from "express";
import orderController from "../controllers/orderController.js";
class OrderRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.listOrder);
        this.router.get('/new/:id', this.getOrder);
        this.router.post('/', this.createOrder);

    }
    async listOrder(req,res,next){
        try {
            const order = await orderController.listarRegistros();
            res.status(200).json(order);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al obtener la orden.' });
        }
    }

    async getOrder(req, res, next) {
        try {
            console.log('Mierda');
            const orderData = req.body;
            const order = await orderController.crearNuevaOrden(orderData);
            res.status(200).json(order);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear la nueva orden.'});
        }
    }

    createOrder(req, res, next) {
        res.send('Responder con POST user');
    }

    getRouter() {
        return this.router;
    }
}

export default OrderRouter;