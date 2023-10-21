import Order from "../models/orderModel.js";


class orderController {
  static async crearNuevaOrden(orden) {
    try {
      const { diagnostico, status, user_id, doctor_id } = orden;
      await Order.create({ diagnostico, status, user_id, doctor_id });
      console.log("Creación de nueva orden -> Exitosa");
    } catch (error) {
      console.error('Error al crear una nueva orden:', error);
      throw error;
    }
  }
  static async listarRegistros() {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      console.log("Error al listar órdenes:", error);
      throw error;
    }
  }

}

export default orderController;

