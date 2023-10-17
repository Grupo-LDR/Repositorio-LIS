import express from "express";
import config from "../config.js";
const routerValid = config.MAIN_VALID.split(',');
class MainRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getMenu);
        this.router.get('/:menu', this.getMenus);
    }
    getMenus(req, res) {
        const peticion = req.params.menu;
        if (routerValid.some(ruta => ruta === peticion)) {
            const menus = peticion.charAt(0).toUpperCase() + peticion.slice(1);
            res.render(`menus/main${menus}.pug`);
        } else {
            res.render('error', {
                message: 'Sitio no encontrado. ',
                error: {
                    status: 404,
                    stack: 'Noe se encuentra la ruta solicitada',
                },
            });
        }
    }
    getMenu(req, res) {
        res.render("menu");
    }
    getRouter() {
        return this.router;
    }


}

export default MainRouter;
