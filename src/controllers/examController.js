import Exam from '../models/examModel.js'
import SampleType from '../models/sampleTypeModel.js';
import Studie from '../models/studieModel.js';
class ExamController {
    static async listExams() {
        try {
            const exams = await Exam.findAll({
                where: { status: true },
                include: {
                    model: SampleType,
                    attributes: ['name', 'observation']
                }
            });
            return exams;
        }
        catch (error) {
            console.log(error);
        }
    }
    //BUG CAMBIAR EL METDO DE VE RIS ESTA EN USO
    static async modifyExam(exam) {
        //modificar examen solo si no tiene relacion con un estudio
        try {
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

