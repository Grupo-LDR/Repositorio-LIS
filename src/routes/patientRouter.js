import express from "express";
const menusValid = ['add', 'search', 'update'];
import {crearUsuario} from "../controllers/user.js";
class PatientRouter {

    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getMenu);
        this.router.get('/:menu', this.getMenus);
        this.router.post('/:menu', this.createUser);
    }
    getMenus(req, res) {
        const peticion = req.params.menu;
        //console.log(`menus/main${peticion}.pug`);
        if (menusValid.includes(peticion)) {
            const menus = peticion;
            // console.log("peticion ->"+peticion)
            //    const menus = peticion.charAt(0).toUpperCase() + peticion.slice(1);
            // console.log("REQUEST ->"+req.body);
           // console.log(`----->main${menus}.pug`);
            // console.log("MENUS: "+menus);
            res.render(`menus/mainsPatient/${menus}Patient.pug`);
        } else {
            //res.status(404).send(`Error 404 - Página no encontrada`);
            res.status(404).send(`Error 404 -  Página  ${peticion} no encontrada`);
        }
    }
    getMenu(req, res) {
        res.render("menu");
    }
    async createUser(req, res) {
        try {
            const usuario = req.body;
            console.log("Ruta createUser *****");
            console.log("--->" + usuario);
            await crearUsuario(usuario); // Llama a crearUsuario con el objeto de usuario
            console.log("Usuario Creado -> EXITOSO");
            res.redirect('/main/patient/search');
        } catch (error) {
            console.error('Error al crear un nuevo usuario:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    
    getRouter() {
        console.log("getRouter");
        return this.router;
    }


}

export default PatientRouter;
