import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Studie extends Model { }
Studie.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  id_order: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  id_exam: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'exams',
      key: 'id'
    }
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: "estados de estudio TABLA"
  },
  observation: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  id_studie_results: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  id_sample: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'samples',
      key: 'id'
    }
  },
  validate_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  modelName: 'Studies',
  tableName: 'studies',
  timestamps: false
});
export default Studie;

