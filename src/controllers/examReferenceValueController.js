import ExamReferenceValues from "../models/examReferenceValueModel.js";
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
                determination_id,
                sex,
                age_min,
                age_max,
                pregnant,
                value_max,
                value_min,
                value_ref_min,
                value_ref_max,
                unit_value_id,
                observation } = value;

            const nuevoValue = await ExamReferenceValues.create({
                status,
                determination_id,
                sex,
                age_min,
                age_max,
                pregnant,
                value_max,
                value_min,
                value_ref_min,
                value_ref_max,
                unit_value_id,
                observation
            });
            return nuevoValue;
        } catch (error) {
            console.log("error al ingresar un nuevo valor ->", error)
            throw error;
        }
    }
    static async update(value) {

        try {
            const id = (value.del) ? value.del : value.edit;
            console.log(id);
            const update = await ExamReferenceValues.findByPk(id);
            if (!update) {
                throw new Error('Valor Referencia no encontrado');
            }
            if (value.del) {
                console.log('line36 ', update.status);
                update.status = !update.status;
                console.log('line37 ', value.del);
                await update.save();
            } else {
                // aca se deberia hacer un update completo
                // el formualrio todavia no ennvia lso datos
                //
                await update.save(); // Guarda los cambios en la instancia
            }
            console.log("Actualización -> Exitosa");
        } catch (error) {
            console.error('Error al actualizar :', error);
            throw error;
        }
    }

/**
 * unidades de medida codificadas 
 * precargarlas en la tabla
 * soporte tecnico
 * usuario solicita agregar nueva unidad de medida
 * tener en cuenta: invertrir id de valores de referencia 
 */
}
export default ExamReferenceValuesController