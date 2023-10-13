import http_errors from 'http-errors';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import express_session from 'express-session';
import morgan from 'morgan';
import csurf from 'csurf';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** modulos routes  */
// autenticacion
import AuthServer from './middlewares/authServer.js';
// rutas  
import IndexRouter from './routes/indexRouter.js';
import MainRouter from './routes/mainRouter.js';
import LoginRouter from './routes/loginRouter.js';
import UserRouter from './routes/userRouter.js';

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
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.set('view engine', 'pug');
        console.log(__dirname);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use(cookieParser());
        this.indexRouter = new IndexRouter();
        this.mainRouter = new MainRouter();
        this.authServer = new AuthServer();
        this.userRouter = new UserRouter();
        this.loginRouter = new LoginRouter();

    }
    /**
     * Ruteo de peticiones  
     */
    appServerRoute() {
        this.app.use(morgan('dev'));
        // ruta archvios estaticos
        this.app.use(express.static('./src/public'));
        // rutas que no requieren auth
        console.log("Cargando manejador de rutas");
        this.app.use('/', this.indexRouter.getRouter());
        // login
        this.app.use('/login', this.loginRouter.getRouter());
        this.app.use('/main', this.mainRouter.getRouter());
        // midlware de auth
        this.app.use(this.authServer.authUser);
        // rutas que requieren auth
        this.app.use('/user', this.userRouter.getRouter());
        this.app.use('/users', this.userRouter.getRouter());
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
