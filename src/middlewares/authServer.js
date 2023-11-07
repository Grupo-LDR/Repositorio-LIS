import express from 'express';
import session from 'express-session';
import config from '../config.js';
import Conexion from '../models/conexion.js';
//console.log(config);

class AuthServer {
    constructor() {
    //     sessionMiddleware = session({
    //         secret: config.APP_SECRET,         
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: {
    //             maxAge: 1000 * 60 * 60 * 24, // Tiempo de vida de la cookie en milisegundos (24 horas)
    //         },
    //     });
    }

        // app.use((req, res, next) => {
        //     if (!req.session) {
        //         return next(new Error('No se pudo acceder a la sesión.'));
        //     }
        
        //     // Aquí puedes guardar la sesión en la base de datos
        //     const sessionData = {
        //         sid: req.sessionID, // ID de la sesión
        //         expires: new Date(Date.now() + req.session.cookie.maxAge), // Fecha de vencimiento de la sesión
        //         data: JSON.stringify(req.session), // Datos de la sesión serializados
        //     };
        
    //         sequelize.models.Session.upsert(sessionData) // Actualiza o inserta la sesión
    //             .then(() => next())
    //             .catch((error) => next(error));
    //     });
    // }
    // auth(req, res, next){
    //     if (req.session && req.session.usuario) {
    //         console.log('Cookie de sesión existente:', req.session.usuario);
    //         next();
    //     } else {
    //         console.log('No se encontró una cookie de sesión.');
    //         res.render('login.pug', { title: config.APP_TITLE });
    //     }
    // }
   
 


}

export default AuthServer;
