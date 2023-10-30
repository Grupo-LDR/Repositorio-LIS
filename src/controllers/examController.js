import Exam from '../models/examModel.js'
import SampleType from '../models/sampleTypeModel.js';
import Studie from '../models/studieModel.js';
import Conexion from '../models/conexion.js';
Conexion.conectar();
class ExamController {
    /**
     * 
     * @returns listado studies, se agreabgaun cmapo para ver si es editable
     */
    static async createExam(exam) {
        try {
            const { nbu, detail, common, sample_type_id, time } = exam;
            console.log(exam);

            const result = await Exam.create({
                nbu,
                detail,
                common,
                sample_type_id,
                time,
            });

            if (result) {
                console.trace(result);
                return true;
            }
        } catch (error) {
            //  throw error;
            console.error('Error al crear el examen:', error.message);
            return false;
        }
    }
    static async createExamTransac(exam) {
        const examTransaction = await Conexion.sequelize.transaction();
        try {
            const { nbu, detail, common, sample_type_id, time } = exam;

            const result = await Exam.create(
                { nbu, detail, common, sample_type_id, time },
                { transaction: examTransaction }
            );

            await examTransaction.commit();
            console.trace(result);
            return true;
        } catch (error) {
            await examTransaction.rollback();
            console.error('Error al crear el examen:', error.message);
            return false;
        }
    }


    static async uptdateExam(exam) {
        //modificar examen solo si no tiene relacion con un estudio
        // teoricamente cuando llega el ID a la interface usuario, no puede modificar los que tiene uso.
        //  pero no esta de mas esta verificacion
        // tener en eucnta que tenmso el campo en uso
        try {
            console.log(typeof exam.id);
            const relation = await Studie.findOne({
                where: { exams_id: exam.id }
            });
            if (relation) {
                console.log('No se puede modificar el examen porque ya existe una relacion con un estudio.');
            } else {
                const examen = await Exam.findByPk(exam.id);
                if (!examen) {
                    throw new Error('Examen no encontrado');
                }
                examen.set(exam);
                await examen.save();
                console.log('Modificacion de examen exitosa.');
            }
        } catch (error) {
            console.log('Error al modificar el examen:', error);
        }
    }
    static async deleteExam(examId) {
        try {
            const exam = await Exam.findByPk(examId);
            if (!exam) {
                console.log('Examen no encontrado');
                return;
            }
            exam.status = false; // false desactiva el examen
            await exam.save();
            console.log('Examen marcado como eliminado');
        } catch (error) {
            console.error('Error al marcar el examen como eliminado:', error);
        }
    }

    static async addDetermition() {

    }
}
export default ExamController;

