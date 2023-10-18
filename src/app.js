//import http_errors from 'http-errors';
import express from 'express';
import compression from 'compression';
//import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config.js';

//import express_session from 'express-session';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
/** modulos routes  */
// autenticacion
//import AuthServer from './middlewares/authServer.js';
// rutas  
import LoginRouter from './routes/loginRouter.js';
import UserRouter from './routes/userRouter.js';
import ExamRouter from './routes/examRouter.js';
// import IndexRouter from './routes/indexRouter.js';
// import MainRouter from './routes/mainRouter.js';
// import PatientRouter from './routes/patientRouter.js';

// variables y constantes App
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
        console.log(__dirname);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use(cookieParser());
        this.loginRouter = new LoginRouter();
        this.userRouter = new UserRouter();
        this.examRouter = new ExamRouter();
        // this.indexRouter = new IndexRouter();
        // this.mainRouter = new MainRouter();
        // this.patientRouter = new PatientRouter();
        // this.authServer = new AuthServer();


    }
    /**
     * Ruteo de peticiones  
     */
    appServerRoute() {
        this.app.use(morgan('dev'));
        // ruta archvios estaticos
        this.app.use(express.static('./src/public'));
        this.app.use('/', this.loginRouter.getRouter());
        this.app.use('/user', this.userRouter.getRouter());
        // ruteo Examenes 
        this.app.use('/exam', this.examRouter.getRouter());



        //this.app.use('/user', this.userRouter.getRouter());
        //this.app.use('/users', this.userRouter.getRouter());
        // // rutas que no requieren auth
        // console.log("Cargando manejador de rutas");
        //this.app.use('/', this.indexRouter.getRouter());
        //        this.app.use('/order', this.orderRouter.getRouter());
        // login
        // this.app.use('/main', this.mainRouter.getRouter());
        // this.app.use('/main/patient', this.patientRouter.getRouter());

        ///neworder/1
        // // midlware de auth
        // this.app.use(this.authServer.authUser);

        // // rutas que requieren auth
        // this.app.use('/user', this.userRouter.getRouter());
        // // this.app.use('/users', this.userRouter.getRouter());
        // //this.app.use('/studie', this.studieRouter.getRouter());
        this.app.use((req, res) => {
            res.status(404).send('Error 404 -< Página no encontrada');
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
