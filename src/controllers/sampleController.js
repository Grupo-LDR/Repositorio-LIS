import Sample from "../models/sampleModel.js";
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
    static async updateSample(sample) {
        try {
            const { id, valid } = sample;
             sample = await Sample.findByPk(id);
            if (!id) {
                console.log('Muestra no encontrada');
                return;
            }
            sample.valid = valid;
            await sample.save();
            console.log('Muestra actualizada con exito.');
        } catch (error) {
            console.error('Error al actualizar la muestra:', error);
        }
    }
}
export default SampleController