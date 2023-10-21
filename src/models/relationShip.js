import User from './userModel.js';
import City from './cityModel.js';
import Order from './orderModel.js';
import Exam from './examModel.js';
/**
 * esto lo hice asi solo, pero si lo queres hacer con clases, ya es otro bardo, te dejo que te rompas la cabeza vos con las clases.
 */
class Relaciones {
  static relaciones() {
    User.belongsTo(City, {
      foreignKey: 'cityId',
    });
  }

  static syncModels() {
    //User.sync();
    //City.sync();
    //Order.sync();
    //Exam.sync();
  }
}
Relaciones.relaciones();
Relaciones.syncModels();

export { User, City };
