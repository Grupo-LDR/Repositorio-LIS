//TODO listar samples_type  ✔
//TODO:crear  samples_type {validar, mapear, guardar}
//TODO edit samples_type {validar, mapear, guardar}
//TODO delete samples_type
/**
 * 
 *  * CREAR TIPOS MUESTRAS
 * BORRAR TTIPO MUESTRA
 * EDITAR TIPO MUESTRAS(SOLO SI NO FUE USADA)
 *  
 *   select samples_type.*, exams.status
 *   from samples_type
 *   LEFT JOIN exams
 *   ON exams.sample_type_id=samples_type.id; 
 *     sequelize
 *   SampleType.findAll({
 *   attributes: ['id', 'other', 'sample', 'type', 'columns', 'you', 'want'],
 *   include: [
 *    {
 *       model: Exam,
 *       attributes: ['status'],
 *       required: false, 
 *        },
 *    ],
 *       })
 */
import SampleType from '../models/sampleTypeModel.js';
//import Exam from '../models/examModel.js';
import Conexion from '../models/conexion.js';
Conexion.conectar();
class SampleTypeController {
    static async listSampleTypes() {
        try {
            const sampleTypes = await
                SampleType.findAll({
                    attributes: [
                        'id',
                        'status',
                        'name',
                        'observation',
                        [
                            Conexion.sequelize.literal
                                ('IFNULL((SELECT `status` FROM `exams` WHERE `exams`.`sample_type_id` = SampleType.id), False)'),
                            'exam_status'
                        ]
                    ]
                })

            /*            SampleType.findAll(
                                {
                                    include: [
                                        {
                                            model: Exam,
                                            attributes: ['status'],
                                            required: false,
                                        }
                                    ]
                                }
                            );
            */
            return sampleTypes;
        } catch (error) {
            console.log('Error a listar las muestras: ', error);
        }
    }
    static async createSampleType(sampleType) {
        try {
            const { name, observation } = sampleType;
            const result = await SampleType.create({ name, observation });
            console.trace(result);
            return true;
        } catch (error) {
            return false;
        }
    }
    static async updateSampleType(type) {
        try {
            const id = (type.del) ? type.del : type.edit;
            const sampleType = await SampleType.findByPk(id);
            if (!sampleType) {
                throw new Error('SampleType no encontrado');
            }
            if (type.del) {
                sampleType.status = !sampleType.status;
                await sampleType.save();
            } else {
                sampleType.name = type.name; // Actualiza el campo 'name'
                await sampleType.save(); // Guarda los cambios en la instancia
            }
            return true;
            console.log("Actualización de Sample Type -> Exitosa");
        } catch (error) {
            console.error('Error al actualizar Sample Type:', error);
            return false;
        }
    }
}
export default SampleTypeController;
