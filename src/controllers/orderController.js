import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Conexion from "../models/conexion.js";
import { z } from 'zod';
class orderController {
  static orderSchema = z.object({
    diagnosis_id: z.number().optional(),
    observation: z.string().optional(),
    patient_id: z.union([z.number(), z.string()]).optional(),
    employee_id: z.number(),
    doctor_id: z.number().optional(),
  })

  /*
   lo pude resolver con una query de sequelize
  sequelize no me tria datos 
   */

  static async crearNuevaOrden(orden) {
    try {
      const { diagnosis_id, observation, patient_id, employee_id, doctor_id } = orden;
      const ordenValida = orden;
      await Order.create(ordenValida);
      console.log("Creación de nueva orden -> Exitosa");
      return orden;
    } catch (error) {
      console.error('Error al crear una nueva orden:', error);
      throw error;
    }
  }
  static async listOrderUser() {
    try {
      //   const query = 'select orders.*,users.id from orders, users WHERE orders.created_at > DATE_SUB(NOW(), INTERVAL 30 DAY) ORDER BY `orders`.`patient_id` ASC;';
      //const query = 'SELECT orders.*, users.id AS user_id, users.last_name as apellido FROM orders INNER JOIN users ON users.id = orders.patient_id WHERE orders.created_at > DATE_SUB(NOW(), INTERVAL 30 DAY) ORDER BY orders.patient_id ASC;';
      const query = 'SELECT * FROM orders  WHERE orders.created_at > DATE_SUB(NOW(), INTERVAL 30 DAY) ;';
      const results = await Conexion.sequelize.query(query)
      return results;
    } catch (error) {
      console.error('Error en la consulta Sequelize:', error);
      throw error;
    }
  }
  static async ordenesPorUsuario() {
    try {
      const query = `SELECT 
     users.*,
     orders.id,
     orders.diagnosis_id,
     orders.observation,
     orders.status,
     orders.doctor_id,
     citys.name
 FROM
     users,
     orders,
     citys
 WHERE
     users.id = orders.patient_id
         AND users.city_id = citys.id
         AND orders.created_at > DATE_SUB(NOW(), INTERVAL 30 DAY);`
      const results = await Conexion.sequelize.query(query)
      return results;
    } catch (error) {
      console.error('Error en la consulta Sequelize:', error);
      throw error;
    }
  }
  static async listarOrdenesPorUsuario(patient_id) {
    try {
      const ordenes = await User.findAll({
        attributes: ['first_name', 'last_name'],
        include: [
          {
            model: Order,
            attributes: ['id'],
          },
        ],
        where: {
          id: patient_id,
        },
        raw: true, // Para obtener resultados en formato JSON plano
      });

      return ordenes;
    } catch (error) {
      console.error('Error al listar las órdenes de un paciente: ', error);
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
  static async listarRegistrosPorId(id) {
    //console.log('ID ->',id)
    try {
      const orders = await Order.findByPk(id, {
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'paciente'
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'empleado'
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'doctor'
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
  // Define los estados válidos en los que puedes actualizar la orden.
  //desactivado -> 0 - activo -> 1 - ingresada -> 2 - esperando toma de muestra -> 3 - Analítica -> 4
  //los estados 5 y 6 serian:
  // finalizada -> 5 - entregada -> 6 //no se deben modificar
  static async actualizarOrdenDeTrabajo(orden) {
    try {
      const estadosValidos = [0, 1, 2, 3, 4];
      const { orden_id, estado, observation, diagnosis_id } = orden;
      const ordenValida = this.orderSchema.parse(orden);
      const newOrder = await Order.findByPk(orden_id);
      if (!newOrder) {
        console.log("La orden no se puede actualizar no existe.");
        return false;
      }
      if (estadosValidos.includes(estado) && estadosValidos.includes(newOrder.status)) {
        newOrder.diagnosis_id = diagnosis_id;
        newOrder.status = estado;
        newOrder.observation = observation;
        await newOrder.save();
        // console.log(`Orden actualizada: -> "${estado}"`);
        return newOrder;
      } else {
        console.log("La orden no se puede actualizar en este estado");
        return false;
      }
    } catch (error) {
      console.error('Error al actualizar la orden de trabajo:', error);
      throw error;
    }
  }

  static async cancelarOrden(orden_id, estado, observation) {
    try {
      //en observation iria el motivo de la cancelacion 
      const estadosValidos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const order = await Order.findByPk(orden_id);
      if (order && estadosValidos.includes(estado) && estadosValidos.includes(order.status)) {
        order.status = estado;
        order.observation = observation;
        await order.save();
        console.log(`Orden actualizada: -> "${estado, observation}"`);
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
  // Aviso de Fecha de entrega de resultados
  static async informarFecha(order_id) {
    const query = `
    SELECT
    DATE_FORMAT(DATE_ADD(NOW(),INTERVAL MAX(e.time) DAY), '%d-%m-%Y') AS fecha
    FROM users AS u
    INNER JOIN orders AS o ON o.patient_id = u.id
    INNER JOIN studies AS s ON s.order_id = o.id
    INNER JOIN exams AS e ON e.id = s.exams_id
    WHERE o.id = :order_id;
`;
    try {
      const results = await Conexion.sequelize.query(query, {
        replacements: { order_id },
        type: Conexion.sequelize.QueryTypes.SELECT,
      });
      return results;
    } catch (error) {
      console.error('Error al ejecutar la consulta SQL:', error);
      throw error;
    }
  }

  /** IMPORTANTE
   * una determinacion puede tener varios valores de referencia
   * pero un valor de referencia puede tener una sola determinacion
   */

  /* este metodo no lo estoy usando, pero no lo quise borras
  */
  static async verMuestra2(id) {
    const query = `SELECT 
  s.order_id as Numero_orden, 
  e.detail AS exam_name, 
  s.samples_id,
  st.name AS muestra,
  sm.observation,
  sm.valid
  FROM studies AS s
  INNER JOIN exams AS e ON s.exams_id = e.id
  INNER JOIN samples AS sm ON s.samples_id = sm.id
  LEFT JOIN samples_type AS st ON e.sample_type_id = st.id
  WHERE s.order_id =:id;`
    try {
      let results = await Conexion.sequelize.query(query, {
        replacements: { id },
        type: Conexion.sequelize.QueryTypes.SELECT,
      });
      return results;
    } catch (error) {
      console.error('Error al ejecutar la consulta SQL:', error);
      throw error;
    }
  }


}

export default orderController;

