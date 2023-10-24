import User from './userModel.js';
import City from './cityModel.js';
import Order from './orderModel.js';
import Exam from './examModel.js';
import Doctor from './doctorModel.js';
import State from './stateModel.js';
import Studie from './studiesModel.js';
import Sample from './sampleModel.js'
import Profile from './profileModel.js';
import StudieResult from './studie_results.js'
/**
 * esto lo hice asi solo, pero si lo queres hacer con clases, ya es otro bardo, te dejo que te rompas la cabeza vos con las clases.
 */
class Relaciones {
  static relaciones() {
    //relacion de usuario con ciudad
    //una ciudad le PERTENECE A UN usuario
    User.belongsTo(City, {
      foreignKey: 'cityId',
    });
    //relacion de ciudad con Pronvincia
    State.hasMany(City, {
      foreignKey: 'states_id',
      as: 'ciudades',
    })
    //relaicon de provincia con ciudad
    City.belongsTo(State, {
      foreignKey: 'states_id',
      as: 'Pronvincia',
    });
    // relacion de un usuario con ordenes
    // un usuarios tiene muchas ordenes
    User.hasMany(Order, {
      foreignKey: 'user_id',
    });
    //relacion de ordenes con usuarios
    //Una Orden le PERTENECE a UN usuario
    Order.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'perteneceA'
    });
    //relacion de usuarios con CREACION DE ORDENES
    //un usuario puede crear muchas ordenes
    User.hasMany(Order, {
      foreignKey: 'employee_id',
    });
    //relacion de ordenes con usuarios
    //Una Orden solo la CREA UN USUARIO
    Order.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'creadoPor'
    });
    Order.belongsTo(Doctor, {
      foreignKey: 'doctor_id',
      as: 'Doctor'
    });
    /**
     * ver relaciones de ordenes para mostrar en las vistas
     */
    Studie.belongsTo(Order, {
      foreignKey: 'order_id'
    });
    // Una Studie pertenece a un Exam
    Studie.belongsTo(Exam, {
      foreignKey: 'exams_id'
    });
    // Una Studie pertenece a un Sample
    Studie.belongsTo(Sample, {
      foreignKey: 'samples_id'
    });
    Profile.belongsTo(User, {
      foreignKey: 'users_id',
    });
    Profile.belongsTo(User, {
      foreignKey: 'users_update_users_id',
    });
    StudieResult.belongsTo(Studie, {
      foreignKey: 'studies_id'
    });

    
  }

  static syncModels() {
    // User.sync();
    // City.sync();
    // Order.sync();
    // Exam.sync();
    // Doctor.sync();
    // State.sync()
  }
}
Relaciones.relaciones();
Relaciones.syncModels();

export { User, City, Order, Doctor, State, Sample, Profile };
