/**
 * configuracion
 * @ true: development
 * @false: dproduction
 *   
 */
const __DEV = false;

/**
 * modulo configuracion
 */
import config from './config.js';
// import Config from './config.js';
// const config = new Config(__DEV);
/**
 * modulos http
 */
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
/**
 * modulos path
 */
import { dirname } from 'path';
import path from 'path';

/***
 * modulos routes
 */
import LoginRouter from './routes/loginRouter.js';
import UserRouter from './routes/userRouter.js';
import ExamRouter from './routes/examRouter.js';
import CityRouter from './routes/cityRouter.js';
import orderRouter from './routes/orderRouter.js';
import examReferenceValuesRouter from './routes/examReferenceValueRouter.js';
/**
 * variables y constantes App
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.clear();
class App {
    constructor() {
        console.log("APP instanciada");
        this.app = express();
    }
    /**
    * Configuracion del servidor
    */


    configureServer() {
        const corsOptions = {
            origin: '*', // Origen permitido
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
            allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
            optionsSuccessStatus: 204, // Código de estado para respuestas pre-vuelo OPTIONS
        };
        console.log("Configurando Server");
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.set('view engine', 'pug');
        console.log(__dirname);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use(cookieParser());
        this.app.use(cors(corsOptions));
        /**
         * instancias de Ruteo
         */
            this.loginRouter = new LoginRouter();
        this.userRouter = new UserRouter();
            this.examRouter = new ExamRouter();
            this.cityRouter = new CityRouter();
            this.orderRouter = new orderRouter();
            this.examReferenceValuesRouter= new examReferenceValuesRouter();
    }
    /**
     * Ruteo de peticiones  
     */
    appServerRoute() {
        this.app.use(morgan('dev'));
        /**
         * Ruteo de peticiones estaticas
         */
        this.app.use(express.static('./src/public'));
        /**
         * Ruteo de peticiones  default index
         */
        this.app.get('/', (req, res) => {
            res.render('index.pug', { title: config.APP_TITLE });
        });
        /**
         * Ruteo de peticiones user
         */
        this.app.use('/user', this.userRouter.getRouter());
        /**
         * Ruteo Examenes
         */
        this.app.use('/exam', this.examRouter.getRouter());
        /** 
         * Ruteo de ciudades
        */
        this.app.use('/city', this.cityRouter.getRouter());
        /**
         * Ruteo de ordenes
         */
        this.app.use('/order', this.orderRouter.getRouter());
        /**
         * Ruteo de valores de referencia
         */
        this.app.use('/values', this.examReferenceValuesRouter.getRouter());
        /**
         * Ruteo de autenticacion
         */
            //    this.app.use(this.authServer.authUser);
        /**
         * Ruteo de error
         */
        this.app.use((req, res) => {
            res.status(404).send('Error 404 -< Página no encontrada');
        });
    }
    /**
     * Inicio asincrónico
     */
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
