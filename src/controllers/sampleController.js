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
            const nuevaMuestra = await Sample.create(sample);
            //console.log('Muestra creada con éxito:', nuevaMuestra.toJSON());
            return nuevaMuestra;
        } catch (error) {
            console.error('Error al crear una muestra:', error);
            throw error;
        }
    }

    static async updateSample(sample) {
        try {
            const { id, valid } = sample;
            const muestra = await Sample.findByPk(id);
            if (!muestra) {
                console.log('Muestra no encontrada');
                return;
            }
            muestra.valid = valid;
            await muestra.save();
            console.log('Muestra actualizada con éxito.');
        } catch (error) {
            console.error('Error al actualizar la muestra:', error);
            throw error;
        }
    }
}
export default SampleController