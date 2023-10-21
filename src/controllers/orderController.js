import { Order, User,Doctor } from "../models/relationShip.js";
class orderController {
  static async crearNuevaOrden(orden) {
    try {
      const { diagnostico, status, user_id, employee_id, doctor_id } = orden;
      await Order.create({ diagnostico, status, user_id, employee_id, doctor_id });
      console.log("Creación de nueva orden -> Exitosa");
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
            model:Doctor,
            attributes:['first_name', 'last_name'],
            as:'Doctor'
          }
        ]
      });
      return orders;
    } catch (error) {
      console.log("Error al listar órdenes:", error);
      throw error;
    }
  }


}

export default orderController;

