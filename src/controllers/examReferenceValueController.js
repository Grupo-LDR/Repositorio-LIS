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
            console.log('error al listar valores de referencia ', error)
            throw error;
        }
    }
    // listar valor de referencia por ID
    static async listValuesbyId(id) { //✅ 
        try {
            const valor = await ExamReferenceValues.findByPk(id);
            console.log('Listando por ID');
            return valor;
        } catch (error) {
            console.log('Error al buscar el valor: ', error)
            throw error;
        }
    }
    //agregar un nuevo valor de referecia
    static async addValue(value) { //✅
        try {
            const { status,
                sex,
                age_min,
                age_max,
                pregnant,
                value_max,
                value_min,
                value_ref_min,
                value_ref_max,
                unit_value,
                observation } = value;

            const nuevoValue = await ExamReferenceValues.create({
                status,
                sex,
                age_min,
                age_max,
                pregnant,
                value_max,
                value_min,
                value_ref_min,
                value_ref_max,
                unit_value,
                observation
            });
            return nuevoValue;
        } catch (error) {
            console.log("error al ingresar un nuevo valor ->", error)
            throw error;
        }
    }
    

}
export default ExamReferenceValuesController