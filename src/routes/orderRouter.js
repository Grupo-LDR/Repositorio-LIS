import Express from "express";
import orderController from "../controllers/orderController.js";
import StudiesController from "../controllers/studieController.js";
import ExamController from "../controllers/examController.js";
import Studie from "../models/studieModel.js";
import UserController from "../controllers/userController.js";
import DiagnosisController from "../controllers/diagnosisController.js";
class OrderRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.listOrder);
        //this.router.get('/samples', this.verMuestra);
        //this.router.get('/sample/pending', this.muestraPendiente);
        //this.router.post('/sample', this.addSample);
        //this.router.get('/list/:id', this.informDate);
        //this.router.get('/new/:id', this.getOrder);
        //this.router.post('/', this.postNewOrder);
        //this.router.post('/edit/:id', this.postEditOrder);
        //this.router.get('/new/:id', this.getNewOrder);

        /** V2  */
        this.router.get('/edit/:user_id/:order_id/:empl_id', this.getEditOrder);
        this.router.post('/new', this.postNewOrder2);
        this.router.get('/new/:user_id/:empl_id', this.getNewOrder3);
        this.router.get('/viewOrder/:id', this.getViewOrder2);
    }
    async addSample(req, res) {
        try {
            const muestra = {
                valid: req.body.valid,
                observation: req.body.observation
            };
            const resultado = await StudiesController.addSample(muestra);
            res.status(200).json({ mensaje: 'Muestra agregada exitosamente' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al agregar la muestra.' });
        }
    }

    async verMuestra(req, res) {
        try {
            const studie = req.body.samples_id;
            if (studie) {
                console.log('El objeto contiene un sample_id:', studie);
                const muestra = await StudiesController.verMuestra();
                res.status(200).json(muestra);
            } else {
                console.log('El objeto no contiene un sample_id');
                res.status(200).json({ mensaje: 'aun falta cargar la muestra' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' });
        }
    }
    async muestraPendiente(req, res) {
        try {
            const muestra = await StudiesController.muestraPendiente();
            const muestrasConNullSample = muestra.filter(item => item.Sample === null);
            if (muestrasConNullSample.length > 0) {
                res.status(200).json({ mensaje: 'Al menos una muestra tiene el campo "Sample" nulo.', muestra: muestrasConNullSample });
            } else {
                res.status(200).json({ mensaje: 'Todas las muestras tienen "Sample" definido.', muestra });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' });
        }
    }
    async informDate(req, res) {
        try {
            const id = req.params.id;
            const order = await orderController.informarFecha(id);
            res.status(200).json(order);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al obtener la orden.' });
        }

    }

    async listOrder(req, res, next) {
        try {
            const orders = await orderController.listarRegistros();
            //console.log(orders);
            //  const or = JSON.stringify(orders);
            // res.render('./orders/orderView.pug', { orders });
            //, { employee_id: '2', user: user, exams: exams, baseUrl: baseUrl });

            res.status(200).json(orders);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al obtener la orden.' });
        }
    }
    async editOrder(req, res) {
        try {
            const id = req.body.id;
            const estado = req.body.status;
            const { diagnosis, observation } = req.body
            //actualizar segun estado
            const order = await orderController.actualizarOrdenDeTrabajo(id);
            res.status(200).json(order);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear la nueva orden.' });
        }
    }
    async getEditOrder(req, res) {
        try {
            const user_id = req.params.user_id
            const order_id = req.params.order_id
            const empl_id = req.params.empl_id
            console.log('Estudios ---->>>>');
            const studios = await StudiesController.getStudiesForOrder(order_id);
            console.log(studios);
            const baseUrl = req.protocol + '://' + req.get('host');
            const examsAll = await ExamController.listExams();
            // const paciente = UserController.findUser(id);
            const user = await UserController.findUser(user_id);
            const diagnosis = await DiagnosisController.listarDiagnosis();
            console.log(diagnosis);


            //            const estado = req.body.status;
            res.render('./orderNewView.pug', { employee_id: empl_id, user: user, examsAll: examsAll, baseUrl: baseUrl, orderNewId: order_id, exams: studios, diagnosis });
            /*     res.render('orderNewView.pug', {
                     employee_id: dataOrder.employee_id,
                     user: dataOrder.user,
                     examsAll: dataOrder.exams,
                     baseUrl: dataOrder.baseUrl,
                     orderNewId: dataOrder.orderNewId.id,
                     exams: studios,
                 });
                 */
            //res.status(200).json(studios);


        } catch (error) {

            console.error(error);
            res.status(500).json({ error: 'Hubo un error ssssss' });
        }
    }
    async postNewOrder(req, res, next) {
        console.trace(req.body);
        try {
            const orderData = {
                diagnosis: req.body.diagnosis,
                observation: req.body.observation,
                patient_id: req.body.patient_id,
                employee_id: req.body.employee_id,
                doctor_id: req.body.doctor_id
            }
            // console.log(orderData);
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);
            if (orderNewId) {
                const order = await orderController.actualizarOrdenDeTrabajo(id, estado, diagnosis, observation);
            } else {
                throw new Error('Hubo un error al crear la nueva orden.');
            }
            console.log(orderNewId);
            StudiesController.registerStudies(orderNewId.id, req.body);
            res.status(200).json(orderNewId);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear la nueva orden.' });
        }
        /**
       {
         diagnostico: 'diarrea',
         comment: 'sin comentarios',
         user: '1',
         user_name: 'Lopez',
         user_employee: '2',
         orderNew: [ '660057', '660188', '660373' ]
       }
        */
        // console.log(req.body);
        //  res.send('Responder con POST user');
    }
    async postNewOrder2(req, res, next) {
        console.trace(req.body);
        //{"diagnosis":"Higado graso","doctor_id":"1","comment":"<AXDS","user_id":"3","user_name":"","employee_id":"3","orderTable_length":"10","orderNew":["1","2","3"]
        try {
            const orderData = {
                diagnosis: req.body.diagnosis,
                observation: req.body.observation,
                patient_id: parseInt(req.body.user_id, 10),
                employee_id: parseInt(req.body.employee_id, 10),
                doctor_id: parseInt(req.body.doctor_id, 10),
            }
            await orderController.crearNuevaOrden(orderData);
            // creacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);
            if (orderNewId) {
                const studiesNew = await StudiesController.registerStudies(orderNewId.id, req.body);
                res.redirect('/');

                //const order = await orderController.actualizarOrdenDeTrabajo(id, estado, diagnosis, observation);
            } else {
                throw new Error('Hubo un error al crear la nueva orden.');
            }

            // StudiesController.registerStudies(orderNewId.id, req.body);

        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear la nueva orden.' });
        }
        /**
       {
         diagnostico: 'diarrea',
         comment: 'sin comentarios',
         user: '1',
         user_name: 'Lopez',
         user_employee: '2',
         orderNew: [ '660057', '660188', '660373' ]
       }
        */
        // console.log(req.body);
        //  res.send('Responder con POST user');
    }

    async getNewOrder(req, res, next) {

        const id = req.params.id;
        try {
            const orderData = {
                patient_id: id,
                employee_id: 2
            }
            console.log('conca');
            console.log(orderData);
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);
            //res.render('./orderView.pug', { order: orderNewId });
            res.status(200).json(orderNewId);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'GET Hubo un error al crear la nueva orden.' });
        }
    }

    getRouter() {
        return this.router;
    }
    /** version 2 opcion 2 */
    async getNewOrder3(req, res, next) {
        try {

            const user_id = req.params.user_id
            const user = await UserController.findUser(user_id);
            const empl_id = req.params.empl_id
            const baseUrl = req.protocol + '://' + req.get('host');
            const examsAll = await ExamController.listExams();
            if (user) {
                res.render('./orderNewView3.pug', { employee_id: empl_id, user: user, examsAll: examsAll, baseUrl: baseUrl });
            } else {
                throw new Error('Hubo un error al crear la nueva orden.');
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error ssssss' });
        }
    }
    /** Version 2 */
    async getNewOrder2(req, res, next) {

        const id = req.params.id;
        const employee_id = req.params.employee;
        try {
            const orderData = {
                patient_id: id,
                employee_id: parseInt(employee_id, 10),
            }
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);

            res.render('./orderView.pug', { order: orderNewId });
            // res.status(200).json(orderNewId);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'GET Hubo un error al crear la nueva orden.' });
        }
    }
    async getViewOrder2(req, res, next) {
        try {
            const id = req.params.id;
            const order = await orderController.listarRegistrosPorId(id);
            const data = await orderController.informarFecha(id);
            let fechaDeEntrega;
            if (data.length > 0) {
                fechaDeEntrega = data[0].fecha;
                console.log(fechaDeEntrega);
            }
            if (fechaDeEntrega == null) {
                fechaDeEntrega = "ESPERANDO INFORME DE RESULTADOS"
            }
            //            {"id":8,"patient_id":2,"diagnosis_id":null,"observation":null,"status":true,"employee_id":3,"doctor_id":1,"created_at":"2023-11-07T13:54:15.000Z","updated_at":"2023-11-07T13:54:15.000Z","create_user_id":null,"update_user_id":null,"validate_users_id":null,"User":null}
            res.render('./orderView.pug', { order, fechaDeEntrega });
            //res.status(200).json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error });
        }
    }
    async getViewOrder2_old(req, res, next) {
        try {
            const id = req.params.id;
            const order = await orderController.listarRegistrosPorId(id);
            res.status(200).json(order);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'GET Hubo un error al crear la nueva orden.' });
        }

    }

}
/**
async getNewOrderUser(req, res) {

        try {
            const id = req.params.id;
            // validacion si usairo exite
            const user = await UserController.findUser(id);
            // verificacion
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            const orderData = {
                patient_id: id,
                employee_id: 2
            }
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);

            const baseUrl = req.protocol + '://' + req.get('host');
            const exams = await ExamController.listExams();
            res.render('./order/orderNewView.pug', { employee_id: '2', user: user, exams: exams, baseUrl: baseUrl, orderNewId: orderNewId });
            // res.status(200).json(user)
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }  

 */

export default OrderRouter;

