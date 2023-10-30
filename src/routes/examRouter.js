import express from "express";
import ExamController from "../controllers/examController.js";


class ExamRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getExam);// lista todo los examens
        this.router.get('/new', this.getNewExam); // envia formualrio neuvo examen
        this.router.post('/new', this.postNewExam); // crea un nuevo examenen base datos
        this.router.post('/edit', this.postEditExam);
    }
    /**
     * devuvle listado de examenes disponibles
     * @param {*} req 
     * @param {*} res 
     */
    async getExam(req, res) {

        try {
            const examenes = await ExamController.listExams();
            // console.log(JSON.stringify(examenes));
            res.status(200).json(examenes);
            // res.render('./exams/examsView.pug', { titulo: 'Listado Examenes', exams: examenes });
        } catch (error) {
            console.error('Error al obtener examenes:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    /**
     * devilve un formulario para ingresa run neuvo examen
     * @param {*} req 
     * @param {*} res 
     */
    async postNewExam(req, res) {
        try {
            const examData = req.body;
            const result = await ExamController.createExam(examData);
            if (result) {
                console.log('El examen se ha creado con éxito.');
                res.status(200).send(result);
            } else {
                throw new Error('No se pudo crear el examen. Revise los registros de error.');
            }
        } catch (error) {
            console.log('No se pudo crear el examen. Revise los registros de error.', error);
            res.status(500).send(`${error}`);
        }
    }
    async getNewExam(req, res) {
        console.log('enroute')
        try {
            const examenes = await ExamController.listExams();
            console.log(examenes);
            //res.render('examsNewView.pug', { titulo: 'NUevo Examen', exams: examenes });
            res.status(200).json(examenes)
        } catch (error) {
            console.error('Error al obtener examenes:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async postNewExam2(req, res) {
        const result = await ExamController.createExam(req.body);
        console.log(result);
        res.status(200).send(result);
    }
    async postEditExam(req, res) {
        ExamController.uptdateExam(req.body);
        res.send(JSON.stringify(req.body));
    }
    getRouter() {
        return this.router;
    }
}
export default ExamRouter;

