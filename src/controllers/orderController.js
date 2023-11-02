import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Conexion from "../models/conexion.js";
class orderController {
  static async crearNuevaOrden(orden) {
    try {
      const { diagnosis_id, observation, patient_id, employee_id, doctor_id } = orden;
      await Order.create({ diagnosis_id, observation, patient_id, employee_id, doctor_id });
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
            // as: 'perteneceA'
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            // as: 'creadoPor'
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            // as: 'Doctor'
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
  /**
  * la consulta trae el nombre y el apellido
  * trae el numero de orden
  * trae la fecha de entrega
  * los nombres de los examenes que solicitó
  * la determinacion y sus valores de referencia maximos y minimos
  */
  static async informarFecha(order_id) {
    const query = `
    SELECT DISTINCT
    u.first_name AS patient_first_name,
    u.last_name AS patient_last_name,
    o.id AS order_number,
    DATE_FORMAT(DATE_ADD(NOW(), INTERVAL e.time DAY), '%d-%m-%Y') AS fecha_de_entrega,
    e.detail AS exam_name,
    ed.name AS determination_name,
    uv.name AS unidad_de_medida,
    uv.unit as unidad,
    erv.value_ref_min,
    erv.value_ref_max
FROM
    users AS u
INNER JOIN
    orders AS o ON u.id = o.patient_id
INNER JOIN
    studies AS s ON s.order_id = o.id
INNER JOIN
    exams AS e ON s.exams_id = e.id
LEFT JOIN
    exam_determinations AS ed ON 1 = 1
LEFT JOIN
    exam_reference_values AS erv ON ed.id = erv.determination_id
LEFT JOIN
    unit_value AS uv ON erv.unit_value_id = uv.id;`;
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
  static async verMuestra(id) {
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
  LEFT JOIN samples_type AS st ON e.sample_type_id = st.id;`
  try {
    const results = await Conexion.sequelize.query(query, {
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

