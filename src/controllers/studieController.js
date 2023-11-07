// ESTO NO ANDA DEBERIA SER
import Studie from "../models/studieModel.js";
import Order from '../models/orderModel_old.js'
import Exam from '../models/examModel.js'
import SampleController from './sampleController.js'
import Sample from "../models/sampleModel.js";
import { Op } from 'sequelize';
import SampleType from "../models/sampleTypeModel.js";

class StudiesController {
  static async registerStudies(order_id, studies) {
    console.log('linea12', studies);
    try {
      let studiesData = [];
      if (Array.isArray(studies.orderNew)) {
        studiesData = studies.orderNew.map(order => ({
          order_id: order_id,
          exams_id: order
        }));
      } else {
        studiesData.push({
          order_id: order_id,
          exams_id: studies.orderNew
        });
      }
      if (studiesData.length > 0) {
        await Studie.bulkCreate(studiesData);
        console.trace(studiesData);
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
  /**
   * ver todas las muestras que estan cargadas
   * @returns 
   */
  static async verMuestra() {
    try {
      const muestra = await Studie.findAll({
        where: {
          samples_id: {
            [Op.not]: null,
          },
        }
      });

      if (!muestra || muestra.length === 0) {
        console.log('No se encontraron muestras asociadas con un sample_id no nulo.');
        return null;
      } else {
        return muestra
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * 
   * @returns ver todas las muestras incluyendo las pendientes 
   */
  static async muestraPendiente() {
    try {
      const muestrasPendientes = await Studie.findAll({
        attributes: ['order_id', 'exams_id', 'observation'],
        include: [
          {
            model: Sample,
            attributes: ['id', 'valid', 'observation'],
            required: false, // LEFT JOIN
          },
          {
            model: Exam,
            attributes: ['id', 'detail'],
            include: [
              {
                model: SampleType,
                attributes: ['name'],
              },
            ],
          },
        ],
      });
      return muestrasPendientes;
    } catch (error) {
      console.error('Error al buscar muestras pendientes:', error);
      throw error;
    }
  }

  static async addExam(exam) {
    ExamController.addExam(exam);
  }

  static async getStudiesForOrder(orderId) {
    try {
      const studies = await Studie.findAll({
        // attributes: ['exams_id'],
        where: {
          order_id: orderId
        }
      });

      return studies;
    } catch (error) {

      console.error('Error al obtener estudios de la orden:', error);
      throw error;
    }
  }

  static async getStudiesOneOrder2(id) {
    try {
      const studies = await Studie.findAll({
        where: {
          order_id: id
        }
      });
      return studies;

    } catch (error) {
      onsole.log("Error al listar estudios:", error);
      throw error;
    }
  }
}
export default StudiesController;