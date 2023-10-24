// ESTO NO ANDA DEBERIA SER
import Studie from "../models/studiesModel.js";

class StudiesController {static async registerStudies(order_id, studies) {
  try {
      let studiesData = [];
      if (Array.isArray(studies.orderNew)) {
              studiesData = studies.orderNew.map(order => ({
              order_id: order_id,
              exams_id: order
          }));
      } else {
          studiesData = {
              order_id: order_id,
              exams_id: studies.orderNew
          };
      }
      if (studiesData.length > 0) {
          await Studie.bulkCreate(studiesData);
          //console.trace(studiesData);
      } else {
          console.error('La variable studiesData está vacía.');
      }
  } catch (error) {
      console.error('Error al insertar estudios:', error);
  }
}

}
export default StudiesController;
/*
    const { first_name, last_name, gender, active, document, phone, email, address, date_birth_at, citys_id } = user;
    await User.create({ first_name, last_name, gender, active, document, phone, email, address, date_birth_at, citys_id });
    console.log("Creación de nuevo usuario -> Exitosa");
}
/*
try {
    const { diagnostico, comment, user_id, employee_id, doctor_id } = orden;
    await Order.create({ diagnostico, comment, user_id, employee_id, doctor_id });
    console.log("Creación de nueva orden -> Exitosa");
    return true;
  } catch (error) {
    console.error('Error al crear una nueva orden:', error);
    throw error;

  }
INSERT INTO `studies`(`id`, `order_id`, `exams_id`, `status`, `update_at`, `observations`, `date_create_at`, `date_validate`, `studie_results_id`, `tests_id`, `samples_id`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]')
*/
/*
 const listaDeEstudios = [
  { order_id: 1, exam_id: 100 },
  { order_id: 2, exam_id: 101 },
  { order_id: 1, exam_id: 102 },
  // ... otros estudios ...
];

async function insertarEstudios(estudios) {
  try {
    // Utiliza bulkCreate para insertar los estudios en la base de datos
    await Study.bulkCreate(estudios);
    console.log('Inserciones exitosas de los estudios.');
  } catch (error) {
    console.error('Error al insertar estudios:', error);
  }
}

// Llama a la función para insertar los estudios en la base de datos
insertarEstudios(listaDeEstudios);
 
 */