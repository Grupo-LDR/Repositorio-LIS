import express from "express";
import CitysController from "../controllers/cityController.js";


class CityRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getCitys);

    }

    async getCitys(req, res) {
        try {
            const citys = await CitysController.listCitys();
            const state = await State.listState();
            console.log(citys);

            // res.render('citysView.pug', { citys });
        } catch (error) {
            console.error('Error al obtener ciudades:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    getRouter() {
        return this.router;
    }
}
export default CityRouter;

