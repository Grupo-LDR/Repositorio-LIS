import express from "express";
const menusValid = ['add', 'search', 'update'];
class PatientRouter {

    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getMenu);
        this.router.get('/:menu', this.getMenus);
    }
    getMenus(req, res) {
        const peticion = req.params.menu;
        console.log(`menus/main${peticion}.pug`);
        if (menusValid.includes(peticion)) {
            const menus = peticion;
            //     const menus = peticion.charAt(0).toUpperCase() + peticion.slice(1);
            console.log(`main${menus}.pug`);
            console.log(menus);
            res.render(`menus/mainsPatient/${menus}Patient.pug`);
        } else {
            res.status(404).send(`Error 404 - Página no encontrada`);
            //res.status(404).send(`Error 404 -  Página  ${peticion} no encontrada`);
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

export default PatientRouter;
