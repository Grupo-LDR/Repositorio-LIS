import express from "express";
import ExamController from "../controllers/examController.js";


class ExamRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getExam);
    }
    async getExam(req, res) {
        try {
            const examenes = await ExamController.listExams();
            console.log('examenes');
            res.render('examsView.pug', { examenes: examenes });
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

