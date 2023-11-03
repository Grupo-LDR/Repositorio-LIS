// ESTO NO ANDA DEBERIA SER
import Studie from "../models/studieModel.js";
import Order from '../models/orderModel.js'
import Exam from '../models/examModel.js'
import SampleController from './sampleController.js'
import Sample from "../models/sampleModel.js";

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
  static async addSample(sample) {
    SampleController.newSample(sample);
  }
  static async updateSample(sample) {
    SampleController.updateSample(sample);
  }
  static async verMuestra(samples_id) {
    try {
      const muestra = await Studie.findOne({ where: { samples_id } });
      if (!muestra) {
        console.log('No se encontró una muestra asociada al sample_id:', samples_id);
        return null;
        //console.log(muestra)
      } else {
        return muestra
      }
    } catch (error) {
      throw error;
    }
  }
  static async addExam(exam) {
    ExamController.addExam(exam);
  }
}
export default StudiesController;