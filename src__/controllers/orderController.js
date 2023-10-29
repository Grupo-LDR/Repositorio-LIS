import { Order, User, Doctor } from "../models/relationShip.js";
class orderController {
  static async crearNuevaOrden(orden) {
    try {
      const { diagnostico, comment, user_id, employee_id, doctor_id } = orden;
      await Order.create({ diagnostico, comment, user_id, employee_id, doctor_id });
      console.log("Creación de nueva orden -> Exitosa");
      return true;
    } catch (error) {
      console.error('Error al crear una nueva orden:', error);
      throw error;

    }
  }
  static async listarRegistros() {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'perteneceA'
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'creadoPor'
          },
          {
            model: Doctor,
            attributes: ['first_name', 'last_name'],
            as: 'Doctor'
          }
        ]
      });
      return orders;
    } catch (error) {
      console.log("Error al listar órdenes:", error);
      throw error;
    }
  }

  static async lastNewOrder(userId) {
    try {
      const lastNewOrder = await Order.findOne({
        where: { employee_id: userId },
        order: [['id', 'DESC']],
        attributes: ['id'],
        limit: 1,
      });
      if (lastNewOrder) {
        console.log('Última orden:', lastNewOrder.toJSON());
        return lastNewOrder;
      } else {
        console.log('No se encontraron registros para el usuario especificado.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }
}

export default orderController;

