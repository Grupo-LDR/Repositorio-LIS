import Exam from '../models/examModel.js';
class ExamController {
    static async listExams() {
        try {
            const exams = await Exam.findAll();
            return exams;
        }
        catch (error) {
            console.log(error);
        }
    }

}
export default ExamController;

