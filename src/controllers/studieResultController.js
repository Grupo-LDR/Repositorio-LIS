import studieResult from '../models/studieResultModel.js';
class studieResultController {
    static async createResult() {
        try {
            const result = await studieResult.create();
            console.log('resultado vacio creado');
            return result
        } catch (error) {
            throw error;
        }
    }

}
export default studieResultController;

