import ExamReferenceValues from "../models/exam_reference_values.js";
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class ExamReferenceValuesController {
    //listar tdos los valores de referencia
    static async listValues() { //✅
        try {
            const valores = await ExamReferenceValues.findAll();
            console.log('Valores listados correctamente');
            return valores;
        } catch (error) {
            console.log('error al listar valores de referencia ',error)
            throw error;
        }
    }
    // listar valor de referencia por ID
    static async listValuesbyId(id){ //✅ 
        try {
            const valor = await ExamReferenceValues.findByPk(id);
            console.log('Listando por ID');
            return valor;
        } catch (error) {
            console.log('Error al buscar el valor: ',error)
            throw error;
        }
    }

}
export default ExamReferenceValuesController