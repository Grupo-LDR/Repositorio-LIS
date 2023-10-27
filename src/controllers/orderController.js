import { Order, User } from "../models/relationShip.js";
class orderController {
  static async crearNuevaOrden(orden) {
    try {
      const { diagnosis, observation, patient_id, employee_id, doctor_id } = orden;
      await Order.create({ diagnosis, observation, patient_id, employee_id, doctor_id });
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
  static async listarRegistrosPorId(id) {
    console.log('ID ->',id)
    try {
      const orders = await Order.findByPk(id, {
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

  static async listarRegistrosPorEtado(estado) {
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
   * Ingreso de una nueva Orden de trabajo. ✔ ✔ ✔ 
    Actualización de Orden de Trabajo (siempre y cuando todavía este en los estado "ingresada" y "esperando toma de muestra" y "Analítica") ✔ ✔ ✔
    Cancelación de Orden de Trabajo con el motivo de cancelación (se permite en cualquier estado)
    Aviso de Fecha de entrega de resultados
    Visualización de Faltante de muestra
    Ingreso de muestra pendiente y si estan todas las muestras pendientes el cambio de estado a "Analítica"
    Impresión de etiquetas
   *
   */

  // Define los estados válidos en los que puedes actualizar la orden.
  //desactivado -> 0 - activo -> 1 - ingresada -> 2 - esperando toma de muestra -> 3 - Analítica -> 4
  //los estados 5 y 6 serian:
  // finalizada -> 5 - entregada -> 6 //no se deben modificar
  static async actualizarOrdenDeTrabajo(orden_id, estado, diagnosis, observation) {
    try {
      const estadosValidos = [0, 1, 2, 3, 4];
      const order = await Order.findByPk(orden_id);
      //  console.log("ORDEN ---->",order)
      // console.log("ESTADO ->", estado);
      // console.log("ESTADO Controller ->", order.status);

      if (order && estadosValidos.includes(estado) && estadosValidos.includes(order.status)) {
        order.status = estado;
        order.diagnosis = diagnosis;
        order.observation = observation;
        await order.save();
        console.log(`Orden actualizada: -> "${estado}"`);
        return true;
      } else {
        console.log("La orden no se puede actualizar en este estado o no existe.");
        return false;
      }
    } catch (error) {
      console.error('Error al actualizar la orden de trabajo:', error);
      throw error;
    }
  }
  static async cancelarOrden(orden_id, estado) {
    try {
      const estadosValidos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const order = await Order.findByPk(orden_id);
      if (order && estadosValidos.includes(estado) && estadosValidos.includes(order.status)) {
        order.status = estado;
        await order.save();
        console.log(`Orden actualizada: -> "${estado}"`);
        return true;
      } else {
        console.log("La orden no se puede actualizar en este estado o no existe.");
        return false;
      }
    } catch (error) {
      console.error('Error al actualizar la orden de trabajo:', error);
      throw error;
    }
  }

}




export default orderController;

