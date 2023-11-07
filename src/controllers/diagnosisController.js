import Diagnostico from "../models/diagnosis.js";

class DiagnosisController {
    static async listarDiagnosis() {
        try {
            const diagnosis = await Diagnostico.findAll();
            console.log(diagnosis)
            return diagnosis;
        } catch (error) {
            console.log(error, "error al obtener diagnsosis")
        }
    }

}
export default DiagnosisController