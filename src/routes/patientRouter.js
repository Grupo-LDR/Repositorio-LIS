import express from "express";
import UserController from "../controllers/userController.js";
import config from "../config.js";
const routerValid = config.USER_VALID.split(',');
class PatientRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getMenu);
        this.router.get('/:menu', this.getMenus);
        this.router.get('/edit/:menu', this.getMenus);
    }

    /**
     controller {
     id: 37,
     first_name: 'Michael',
     last_name: 'Johnson',
     gender: 'M',
     active: 1,
     document: 345678901,
     phone: 2147483647,
     email: 'michael.johnson@example.com',
     address: '789 Oak St',
     date_birth_at: '1992-07-17',
     password: 'password3',
     date_create_at: 2023-10-11T09:40:30.000Z,
     citys_id: 3,
     edad: 31
   }
   */
    async getMenus(req, res) {
        const peticion = req.params.menu;
        if (routerValid.some(ruta => ruta === peticion)) {
            console.log('linea 14: ', peticion);
            const menus = peticion;
            const usuarios = await UserController.listarUsuarios();
            console.log(typeof usuarios);
            const dataArray = usuarios.map(item => item.get({ plain: true }));

            // res.render('usuarios', { usuarios: dataArray });

            res.render(`menus/mainsPatient/${menus}Patient.pug`, { usuarios: dataArray });
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

export default PatientRouter;
