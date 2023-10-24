import { Sample } from '../models/relationShip.js'
class SampleController {
    static async listSamples() {
        try {
            const samples = await Sample.findAll();
            return samples;
        } catch (error) {
            console.log('Error a listar las muestras: ', error);
        }
    }
    static async newSample(sample) {
        try {
            const muestra = await Sample.create(sample);
             console.log('Muestra creada con exito:', muestra.toJSON());
            return muestra;
        } catch (error) {
            console.error('Error al crear una muestra:', error);
            throw error;
        }
    }
}
export default SampleController