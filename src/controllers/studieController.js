// ESTO NO ANDA DEBERIA SER
import Studie from "../models/studieModel.js";
import Order from '../models/orderModel.js'
import Exam from '../models/examModel.js'
import Sample from '../models/sampleModel.js'

class StudiesController {
  static async registerStudies(order_id, studies) {
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