import express from "express";
import ExamController from "../controllers/examController.js";


class ExamRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getExam);
        this.router.get('/new', this.getNewExam);
    }
    /**
     * devuvle listado de examenes disponibles
     * @param {*} req 
     * @param {*} res 
     */
    async getExam(req, res) {

        try {
            const examenes = await ExamController.listExams();
            console.log(JSON.stringify(examenes));
            // res.send(examenes);
            res.render('./exams/examsView.pug', { titulo: 'Listado Examenes', exams: examenes });
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
    async getNewExam(req, res) {
        try {
            const examenes = await ExamController.listExams();
            console.log(examenes);
            //         res.render('examsNewView.pug', { titulo: 'NUevo Examen', exams: examenes });
        } catch (error) {
            console.error('Error al obtener examenes:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    getRouter() {
        return this.router;
    }
}
export default ExamRouter;

