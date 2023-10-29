import SampleType from '../models/sampleTypeModel.js';
class SampleTypeController {
    static async listSampleTypes() {
        try {
            const sampleTypes = await SampleType.findAll();
            return sampleTypes;
        } catch (error) {
            console.log('Error a listar las muestras: ', error);
        }
    }

    static async createSampleType(type) {

        try {
            const { name } = type;
            await SampleType.create({ name });
            console.log("Creación de nuevo SAMPLE -> Exitosa");
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
