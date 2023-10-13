import express from "express";
const menusValid = ['audit', 'exam', 'order', 'patient', 'result', 'sample', 'user'];
class MainRouter {

    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getMenu);
        this.router.get('/:menu', this.getMenus);
    }
    getMenus(req, res) {
        const peticion = req.params.menu;
        if (menusValid.includes(peticion)) {
            const menus = peticion.charAt(0).toUpperCase() + peticion.slice(1);
            console.log(`main${menus}.pug`);
            console.log(menus);
            res.render(`menus/main${menus}.pug`);
        } else {
            res.status(404).send('Error 404 - Página no encontrada');
        }
    }
    getMenu(req, res) {
        res.render("menu");
    }
    getRouter() {
        console.log("getRouter");
        return this.router;
    }


}

export default MainRouter;
