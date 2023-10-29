import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class orderController {
  //crear nueva orden
  static async crearNuevaOrden(orden) { //✅
    try {
      const { diagnosis,
        observation,
        patient_id,
        employee_id,
        doctor_id } = orden;
      await Order.create({
        diagnosis,
        observation,
        patient_id,
        employee_id,
        doctor_id
      });
      console.log("Creación de nueva orden -> Exitosa");
      return orden;
    } catch (error) {
      console.error('Error al crear una nueva orden:', error);
      throw error;

    }
  }
  // listar todas las ordenes
  static async listarRegistros() { //✅
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          }, {
            model: User,
            attributes: ['first_name', 'last_name'],
          }
        ]
      });
      return orders;
    } catch (error) {
      console.log("Error al listar órdenes:", error);
      throw error;
    }
  }
//listar ordenes por usuario
  static async listarRegistrosPorId(id) { //✅
    // console.log('ID ->', id)
    try {
      const orders = await Order.findByPk(id, {
        //es necesario el as porque tiene multiple relacion con una misma tabla
        //si no lo pongo, me devuelve: User: null
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
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'Doctor'
          }
        ]
      });
      // console.log(orders);
      return orders;
    } catch (error) {
      console.log("Error al listar órdenes:", error);
      throw error;
    }
  }
//listar ordenes segun estado 
  static async listarRegistrosPorEtado(estado) { //✅
    try {
      const orders = await Order.findAll({
        where: {
          status: estado, //estado seria los diferentes estados que tiene la orden: analitica
          // esperando muestra, finalizada, etc
        },
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
            model: User,
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
//traer la ultima orden de cada usuario
  static async ultimaOrden(userId) {
    try {
      const ultimaOrden = await Order.findOne({
        where: { employee_id: userId },
        order: [['id', 'DESC']],
        attributes: ['id'],
        limit: 1,
      });
      if (ultimaOrden) {
        console.log('Última orden:', ultimaOrden.toJSON());
        return ultimaOrden;
      } else {
        console.log('No se encontraron registros para el usuario especificado.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }
  /**
   * PENDIENTES:
   
  Cancelación de Orden de Trabajo con el motivo de cancelación (se permite en cualquier estado) ✔✔✔
    Aviso de Fecha de entrega de resultados --pendiente
    Visualización de Faltante de muestra
    Ingreso de muestra pendiente y si estan todas las muestras pendientes el cambio de estado a "Analítica"
    Impresión de etiquetas
   *
   */

  // Define los estados válidos en los que puedes actualizar la orden.
  //desactivado -> 0 - activo -> 1 - ingresada -> 2 - esperando toma de muestra -> 3 - Analítica -> 4
  //los estados 5 y 6 serian:
  // finalizada -> 5 - entregada -> 6 //no se deben modificar
  static async actualizarOrdenDeTrabajo(orden_id, estado, diagnosis, observation) {//✅
    try {
      const estadosValidos = [0, 1, 2, 3, 4];
      const order = await Order.findByPk(orden_id);
      if (order && estadosValidos.includes(estado) && estadosValidos.includes(order.status)) {
        order.status = estado;
        order.diagnosis = diagnosis;
        order.observation = observation;
        await order.save();
        console.log(`Orden actualizada: -> "${estado}"`);
        return order;
      } else {
        console.log("La orden no se puede actualizar en este estado");
        throw error;
      }
    } catch (error) {
      console.error('Error al actualizar la orden de trabajo:', error);
      throw error;
    }
  }
// cancelar orden en cualquier estado 
  static async cancelarOrden(orden_id, estado) { //✅
    try {
      const estadosValidos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const order = await Order.findByPk(orden_id);
      if (order && estadosValidos.includes(estado) && estadosValidos.includes(order.status)) {
        order.status = estado;
        await order.save();
      // console.log(`Orden actualizada: -> "${estado}"`);
        return order;
      } else {
        console.log("La orden no se puede actualizar en este estado.");
        throw error;
      }
    } catch (error) {
      console.error('Error al actualizar la orden de trabajo:', error);
      throw error;
    }
  }
  // Aviso de Fecha de entrega de resultados
  static async informarFecha() { //❌(sin hacer)

  }

}

export default orderController;

