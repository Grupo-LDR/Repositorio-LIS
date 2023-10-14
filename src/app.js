import http_errors from 'http-errors';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import config from './config.js';
console.log(config);
import express_session from 'express-session';
import morgan from 'morgan';
import csurf from 'csurf';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
/** modulos routes  */
// autenticacion
import AuthServer from './middlewares/authServer.js';
// rutas  
import IndexRouter from './routes/indexRouter.js';
import MainRouter from './routes/mainRouter.js';
import PatientRouter from './routes/patientRouter.js';
import LoginRouter from './routes/loginRouter.js';
import UserRouter from './routes/userRouter.js';
// variables y constantes App
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//dotenv.config();
console.clear();
class App {
    constructor() {
        console.log("APP instanciada");
        this.app = express();
    }
    configureServer() {
        console.log("Configurando Server");
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.set('view engine', 'pug');
       // console.log(__dirname);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use(cookieParser());
        this.indexRouter = new IndexRouter();
        this.mainRouter = new MainRouter();
        this.patientRouter = new PatientRouter();
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
        //tuve que cambiar de lugar las rutas para saltar el autenticado
        this.app.use('/main', this.userRouter.getRouter());
        this.app.use('/main/patient/search', this.userRouter.getRouter());
        // login
        this.app.use('/login', this.loginRouter.getRouter());
        this.app.use('/main', this.mainRouter.getRouter());
        this.app.use('/main/patient', this.patientRouter.getRouter());
        // midlware de auth
        this.app.use(this.authServer.authUser);
        // rutas que requieren auth
        //this.app.use('/user', this.userRouter.getRouter());
        //this.app.use('/users', this.userRouter.getRouter());
        //this.app.use('/studie', this.studieRouter.getRouter());
        this.app.use((req, res) => {
            res.status(404).send('Error 404 - Página no encontrada');
        });
    }

    // Inicio asincrónico
    async start() {
        try {
            console.log(`Iniciando APP en el puerto ${config.APP_PORT}`);
            this.configureServer();
            this.appServerRoute();
            this.app.listen(config.APP_PORT, () => {
                console.log(`Servidor escuchando en el puerto ${config.APP_PORT}`);
            });
        } catch (error) {
            console.error('Error en la inicialización:', error);
        }
    }
}

export default App;
