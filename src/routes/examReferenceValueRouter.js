import ExamReferenceValuesController from "../controllers/examReferenceValueController.js";
import express from "express";
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class examReferenceValuesRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.listExamReferenceValue);
    }
    async listExamReferenceValue(req,res){ //⏳
        try {
            const values = await ExamReferenceValuesController.listValues();
            console.log('listando valores de referencia: ->')
            res.status(200).send(JSON.stringify(values))
            return values;
        } catch (error) {
            console.log('error al listar los valores de referencia ->', error)
            res.status(500).send(JSON.stringify("Error en el servidor"))
            throw error
        }
    }
    getRouter() {
        return this.router;
    }
}
export default examReferenceValuesRouter