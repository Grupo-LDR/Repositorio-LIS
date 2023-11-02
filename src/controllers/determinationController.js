import Determination from "../models/determination.js";
class determinationController {
    static async add(determination) {
        try {
            const {
                name,
                observation,
                exam_id } = determination;
            const newDetermination = await Determination.create(determination);
            return newDetermination;
        } catch (error) {
            throw error;
        }
    }
    static async update(determination) {
        try {
          const determinationId = determination.id;
          const determinacion = await Determination.findByPk(determinationId);
          if (!determinacion) {
            throw new Error('Determinación no encontrada');
          } 
          await determinacion.update(determination);
          return determinacion;
        } catch (error) {
          throw error;
        }
      }
}
export default determinationController;