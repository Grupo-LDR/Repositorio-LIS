import User from './userModel.js';
import City from './cityModel.js';
import Order from './orderModel.js';
import Exam from './examModel.js';
import State from './stateModel.js';
import Studie from './studieModel.js';
import Sample from './sampleModel.js';

import Profile from './profileModel.js';
import StudieResult from './studieResultModel.js';

class Relaciones {
  static relaciones() {
    // Relación de un usuario con órdenes como paciente
    // Un usuario tiene muchas órdenes como paciente
    User.hasMany(Order, {
      foreignKey: 'patient_id',
      as: 'PatientOrders',
    });

    // Relación de un usuario con órdenes como creador
    // Un usuario puede crear muchas órdenes
    User.hasMany(Order, {
      foreignKey: 'employee_id',
      as: 'EmployeeOrders',
    });
  
    Studie.belongsTo(Order, {
      foreignKey: 'order_id',
    });

    Studie.belongsTo(Exam, {
      foreignKey: 'exams_id',
    });

    Studie.belongsTo(Sample, {
      foreignKey: 'samples_id',
    });

    // Relación de typo mueestra con exam 
    // Se requeir para identificar grupso de muetras
    // SampleType.hasMany(Exam, {
    //   foreignKey: 'sample_type_id',
    // });

    Profile.belongsTo(User, {
      foreignKey: 'user_id',
    });

    Profile.belongsTo(User, {
      foreignKey: 'users_update_users_id',
    });

    StudieResult.belongsTo(Studie, {
      foreignKey: 'studies_id',
    });
  }

  static syncModels() {
    // User.sync();
    // City.sync();
    // Order.sync();
    // Exam.sync();
    // State.sync()
  }
}

Relaciones.relaciones();
Relaciones.syncModels();

export { User, City, Order, State, Sample, Profile, Exam, Studie, StudieResult };
