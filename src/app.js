import http_errors from 'http-errors';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express_session from 'express-session';
import morgan from 'morgan';

import csurf from 'csurf';

import path from 'path';

/** modulos routes  */
// autenticacion
import AuthServer from './middlewares/authServer.js';
// rutas  
import LoginRoutes from './routes/loginRoute.js';
import UserRoutes from './routes/userRoute.js';

dotenv.config();
console.clear();
class App {
    constructor() {
        console.log("APP instanciada");
        this.app = express();
    }

    static config = {
        APP_PORT: process.env.APP_PORT,
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_DIALECT: process.env.DB_DIALECT,
        DB_DATABASE: process.env.DB_DATABASE
    };

    configureServer() {
        console.log("Configurando Server");
        this.app.use(compression());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.authRoutes = new AuthServer();
        this.userRoutes = new UserRoutes();
        this.loginRoutes = new LoginRoutes();

    }
    /**
     * Ruteo de peticiones  
     */
    appServerRoute() {
        // rutas qu eno requieren auth
        console.log("Cargando manejador de rutas");
        this.app.use(express.static('./src/public'));
        this.app.use(express.static('./src/public', { root: 'index.html' }));
        this.app.use('/login', this.loginRoutes.getRouter());
        // midlware de auth
        this.app.use(this.authRoutes.authUser);
        // rutas que requieren auth
        this.app.use('/user', this.userRoutes.getRouter());
        this.app.use('/users', this.userRoutes.getRouter());
        this.app.use((req, res) => {
            res.status(404).send('Error 404 - Página no encontrada');
        });
    }

    // Inicio asincrónico
    async start() {
        try {
            console.log(`Iniciando APP en el puerto ${App.config.APP_PORT}`);
            this.configureServer();
            this.appServerRoute();
            this.app.listen(App.config.APP_PORT, () => {
                console.log(`Servidor escuchando en el puerto ${App.config.APP_PORT}`);
            });
        } catch (error) {
            console.error('Error en la inicialización:', error);
        }
    }
}

export default App;
