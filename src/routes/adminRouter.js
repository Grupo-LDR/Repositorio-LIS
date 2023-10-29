import express from "express";

class AdminRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getAdmin);

    }

    async getAdmin(req, res) {
        try {
            res.status(200).json('admin');
            // res.render('adminView.pug', { admins: admins});
        } catch (error) {
            console.error('Error al obtener data:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    getRouter() {
        return this.router;
    }
}
export default AdminRouter;

