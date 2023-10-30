/**
 * //TODO
 * usuario -> creo orden (FORM) -> DEN CARGO LOS ESTUDIOS (HEPATOGRAMA, HEMOGRAMA)
 * USUARIO -> HEPTOGRAMA -> {}
 * sample_type  ✔
 * sample 
 * exams
 * exams_reference_value 
 * users
 * // BUG RECEPCION TECNICO, BIOQUIMICO
 * //   ESTE ES EL CAMINO FELIZ
 * orders: REP POST con {name, docTOR , diagnosco, user, employee, (rename a stuiyNew) newOrde[id estudios ]: 1º creo orden, devulvo el id , con ese id: creo (INSERT STUDIES que me relacion los examns con la orden)
 * recorrer segun ID order, (que ya tengo) los estudios (que ya tengo {son los examn id}) los estuides para la orden esto me permiten buscar las determianciones par aCREAR LOS STUDIES_RESULT (SIN VALUES)
 * Ademas tengo que recorre los examns para determanr le maximo tiempo y vocar a la vista_orden() un time de entrega
 * //BUG ADMINISTRATIVA
 * ESTO S EDEBI ANETREGAR EL MARTES 25/10
 * 
 * -- GESTION EXAMENES (TABLA EXAMNS)
 *  *  INGRESO NUEVO EXAMAN (HEPATOGRAMA, HEMOGRAMA...)
 *  * EDITAR EXAMEN (CAMBIAR DATOS [ESO SOLO SI NO FUERON USADOS EN UN ESTUDIO] Y PODER SETEAR BORRADO LOGICO {DISPONIBILIDAD}) ( ESTO SOLO SI NO )
 * 
 * (TABLA EXAM_DETERMIANTIONS) CRUD {ALTA Y MOCIDICACION DE TIPOS DETEMRIANCIONES (CONTEO GLOBIULOS BMANCOS,  ROJOS)}
 * (TABLA EXAMNS_REF_VALUE) CRUD (OJO SI NUNCA SE OBTUVIERON RESULTADO) 
 * (TABLA SAMPLES_TYPES Y SAMPLES) * CRUD 
 * 
 * // GESTION ORDENES
 *  * CREAR NUEVA ORDEN
 *  ACTUALIZACION DE ORDEN (SIEMPRE CUANDO ESTA EN (INGRESADA, TOMA MUESTRA, ANALITICA)) 
 *  CANCELCION CON MOTIVO en cualquier  estado excepto realizar o mayor
 *  AVISO ENTREGA
 *  VISUALIZACION DE MUESTRAS (VIEW + LOGICA )
 *  IMPRESION ETIQUETAS (VIEW)
 * 
 * 
 * studies
 * profiles
 * states  
 * citys
 * studys_result (importante) carga cuando vacio creo un orden
 * studies_result VALUE manual
*/
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
// import LoginRouter from './routes/loginRouter.js';
import UserRouter from './routes/userRouter.js';
import AdminRouter from './routes/adminRouter.js';
import SampleTypeRouter from './routes/sampleTypeRouter.js';
import ExamRouter from './routes/examRouter.js';

// import ExamRouter from './routes/examRouter.js';
// import CityRouter from './routes/cityRouter.js';
// import orderRouter from './routes/orderRouter.js';
/**
 * variables y constantes App
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//console.clear();
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
            origin: '*', // orign permitido
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // metodos permitidos
            allowedHeaders: 'Content-Type,Authorization', // ancabezados permitidos
            optionsSuccessStatus: 204,
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
        //     this.loginRouter = new LoginRouter();
        this.userRouter = new UserRouter();
        this.adminRouter = new AdminRouter();
        this.sampleTypeRouter = new SampleTypeRouter();
        this.examRouter = new ExamRouter();


        //     this.examRouter = new ExamRouter();
        //     this.cityRouter = new CityRouter();
        //     this.orderRouter = new orderRouter();
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
         * Ruteo de peticiones sampletype
         */
        this.app.use('/samplestype', this.sampleTypeRouter.getRouter());

        /**
         * Ruteo Examenes
         */
        this.app.use('/exam', this.examRouter.getRouter());
        /** 
         * Ruteo de ciudades
        */
        // this.app.use('/city', this.cityRouter.getRouter());
        /**
         * Ruteo de ordenes
         */
        // this.app.use('/order', this.orderRouter.getRouter());
        /**
         * Ruteo de autenticacion
         */
        //        this.app.use(this.authServer.authUser);
        this.app.use('/admin', this.adminRouter.getRouter());
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
