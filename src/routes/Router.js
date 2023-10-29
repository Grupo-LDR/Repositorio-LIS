import express from "express";
// import [TU CONTROLLER] from "../controllers/[path]";
class TU_ROUTER_Router {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.get_TU_ROUTER);

    }

    async get_TU_ROUTER(req, res) {
        try {
            const TU_DATA = await TU_CONTROLLER.TUPETICION();
            //console.log(citys);
            res.status(200).json(TU_DATA); // PARA JSON
            // res.render('TU_VISTA.pug', { TU_DATA: TU_DATA }); // PARA RENDER BINDEADO
        } catch (error) {
            console.error('Error al obtener TU_DATA:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    getRouter() {
        return this.router;
    }
}
export default TU_ROUTER_Router;
