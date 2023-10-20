import Order from "../models/orderModel.js";
class orderController{
    static async crearNuevoRegistro() {
        try {
          const nuevoRegistro = await Order.create({
            diagnostico: 'Alguna descripción',
            status: true, 
            comment: 'Comentario',
            user_id: 1
    
          });
          console.log('Nuevo registro creado:', nuevoRegistro);
        } catch (error) {
          console.error('Error al crear el registro:', error);
        }
      }
}

export default orderController;
  
