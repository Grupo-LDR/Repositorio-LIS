import ExamReferenceValues from "../models/exam_reference_values.js";
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class ExamReferenceValuesController {
    static async listValues() {
        try {
            const valores = await ExamReferenceValues.findAll();
            console.log('Valores listados correctamente');
            return valores;
        } catch (error) {
            console.log('error al listar valores de referencia ',error)
            throw error;
        }
    }

}
export default ExamReferenceValuesController