import StudieResult from '../models/studieResultModel.js';
import Exam from '../models/examModel.js';
import Study from '../models/studieModel.js';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Conexion from '../models/conexion.js';
class studieResultController {
    static async createResult(resultado) {
        try {
            const { studies_id } = resultado;
            const result = await StudieResult.create({ studies_id });
            console.log('Resultado creado: ---->', result);
            return result;
        } catch (error) {
            console.error('Error al crear el resultado:', error);
            throw error;
        }
    }
    static async verResultados() {
        try {
            const result = await StudieResult.findAll();
            // console.log("RESULTADOS ->",result) // este anda
            return result
        } catch (error) {
            console.error('Error al crear el resultado:', error);

        }
    }
    static async updateResult(resultado) {
        try {
            const result = await StudieResult.findByPK(resultado.id);
            if (!result) {
                throw new Error('Result no encontrado');
            }
            result.set(resultado);
            await result.save();
            return result
        } catch (error) {
            console.error('Error al actualizar el resultado:', error);

        }
    }
    static async resultados() {
        try {
            const resultados = await StudieResult.findAll({
                attributes: [
                  [Conexion.sequelize.literal('u.first_name'), 'Nombre'],
                  [Conexion.sequelize.literal('u.last_name'), 'apellido'],
                  'values',
                ],
                include: [
                  {
                    model: Study,
                    attributes: ['id', 'order_id'],
                    include: [
                      {
                        model: Order,
                        attributes: [],
                        include: [
                          {
                            model: User,
                            as: 'paciente',
                            attributes: ['first_name', 'last_name'],
                            where: {
                              patient_id: Conexion.sequelize.col('Order.patient_id'),
                            },
                          },
                        ],
                      },
                      {
                        model: Exam,
                        attributes: ['detail', [Conexion.sequelize.fn('DATE_FORMAT', Conexion.sequelize.literal('DATE_ADD(NOW(), INTERVAL MAX(time) DAY)'), '%d-%m-%Y'), 'fecha_de_entrega']],
                      },
                    ],
                  },
                ],
                where: {
                  '$Study.order_id$': Conexion.sequelize.col('Order.id'),
                },
              });

            return resultados;
        } catch (error) {
            console.error('Error al consultar resultados:', error);
            throw error;
        }
    }


}
export default studieResultController;

