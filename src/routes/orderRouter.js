import Express from "express";
import orderController from "../controllers/orderController.js";
import StudiesController from "../controllers/studieController.js";
import Studie from "../models/studieModel.js";
class OrderRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.listOrder);
        this.router.get('/samples', this.verMuestra);
        this.router.get('/sample/pending', this.muestraPendiente);
        this.router.post('/sample', this.addSample);
        this.router.get('/list/:id', this.informDate);
        // this.router.get('/new/:id', this.getOrder);
        this.router.post('/', this.postNewOrder);
        this.router.put('/edit/:id', this.editOrder);
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
            const order = await orderController.actualizarOrdenDeTrabajo(id, estado, diagnosis, observation);
            res.status(200).json(order);
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear la nueva orden.' });
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
            console.log(orderData);
            // creacion orden
            await orderController.crearNuevaOrden(orderData);
            // verificacion orden
            const orderNewId = await orderController.ultimaOrden(orderData.employee_id);
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

    getRouter() {
        return this.router;
    }
}

export default OrderRouter;
