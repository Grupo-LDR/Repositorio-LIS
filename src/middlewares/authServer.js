// import crypto from 'crypto';
// import hrtime from 'process';
// import { v4 as uuidv4 } from 'uuid';
// const uuid = uuidv4();
// console.log('UUID generado:', uuid);
import Session from "../models/session.js"
import User from "../models/userModel.js"
import config from '../config.js';
//console.log(config);

class AuthServer {
    constructor() {
    }
    auth(req, res, next) {
        const id = req.body.id
        console.log(id);
        try {
            const userNuevo = Session.findByPk(id);
            console.log(userNuevo)
            const tokken = config.APP_SECRET;
        }

        catch {
            res.status(200);
            next();
        }
    }
}
export default AuthServer;