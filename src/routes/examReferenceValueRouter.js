import ExamReferenceValuesController from "../controllers/examReferenceValueController.js";
import express from "express";
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class ExamReferenceValuesRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.listExamReferenceValue);
        this.router.get('/list/:id', this.listValueId);
        this.router.post('/', this.addValue);
        this.router.post('/edit/:id', this.editValue);

    }
    async listExamReferenceValue(req, res) { //✅
        try {
            const values = await ExamReferenceValuesController.listValues();
            console.log('listando valores de referencia: ->')
            //examRreferenceValuesView.pug
            // res.status(200).send(JSON.stringify(values))
            res.render('./exam/examRreferenceValuesView.pug', { examsRefValue: values });
            return values;
        } catch (error) {
            console.log('error al listar los valores de referencia ->', error)
            res.status(500).send(JSON.stringify("Error en el servidor"))
            throw error
        }
    }
    async listValueId(req, res) { //✅
        const id = req.params.id;
        try {
            const valor = await ExamReferenceValuesController.listValuesbyId(id);
            //console.log("ID ->", id)
            res.status(200).send(JSON.stringify(valor));
            return valor
        } catch (error) {
            console.log("error al listar el valor de referencia", error)
            res.status(500).send(JSON.stringify("Error en el servidor"))
            throw error;
        }
    }
    async addValue(req, res) { //✅
        const value = req.body;
        try {
            const valor = await ExamReferenceValuesController.addValue(value);
            res.status(200).send(JSON.stringify(valor));
            return valor
        }
        catch (error) {
            console.log("error al agregar el valor de referencia", error)
            res.status(500).send(JSON.stringify("Error en el servidor"))
            throw error;
        }
    }
    async editValue(req,res) { //✅
        try {
            const id = req.params.id;
            const valor = req.body;
            const valorEditado = await ExamReferenceValuesController.updateValue(id,valor);
           // console.log(valor);
            res.status(200).send(JSON.stringify(valorEditado));
        } catch (error) {
            console.log('error al editar el valor de referencia');
            throw error;
        }
    }
    getRouter() {
        return this.router;
    }
}
export default ExamReferenceValuesRouter