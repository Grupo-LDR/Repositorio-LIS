import Exam from '../models/examModel.js'
import SampleType from '../models/sampleTypeModel.js';
import Studie from '../models/studieModel.js';
import determinationController from './determinationController.js'
import examRefrenceValue from './examReferenceValueController.js'
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
    static async addExam(exam) {
        try {
            const { nbu,
                detail,
                common,
                status,
                sample_type_id,
                time } = exam

            const newExam = await Exam.create({
                nbu,
                detail,
                common,
                status,
                sample_type_id,
                time
            });
            return newExam;
        } catch (error) {
            throw error
        }
    }
    static async updateDetermition(determination) {
        determinationController.update(determination)
    }
    static async addDetermition(determination) {
        determinationController.add(determination)
    }

    static async addValue(value) {
        examRefrenceValue.addValue(value);
    }
    static async updateValue(value) {
        examRefrenceValue.update(value);
    }



}
export default ExamController;

