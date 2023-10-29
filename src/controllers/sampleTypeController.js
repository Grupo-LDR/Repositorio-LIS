
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

    static async createSampleType(type) {
        try {
            const { name } = type;
            const result = await SampleType.create({ name });
            console.log("Creación de nuevo SAMPLE -> Exitosa ", result);
        } catch (error) {
            console.error('Error al crear un nuevo typop muestra:', error);
            throw error;
        }
    }
    static async updateSampleType(type) {
        try {
            const id = (type.del) ? type.del : type.edit;
            console.log(id);
            const sampleType = await SampleType.findByPk(id);
            if (!sampleType) {
                throw new Error('SampleType no encontrado');
            }
            if (type.del) {
                console.log('line36 ', sampleType.status);
                sampleType.status = !sampleType.status;
                console.log('line37 ', type.del);
                await sampleType.save();

            } else {
                sampleType.name = type.name; // Actualiza el campo 'name'
                await sampleType.save(); // Guarda los cambios en la instancia
            }
            console.log("Actualización de Sample Type -> Exitosa");
        } catch (error) {
            console.error('Error al actualizar Sample Type:', error);
            throw error;
        }
    }
}
export default SampleTypeController;
