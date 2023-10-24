import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class testReference extends Model { };
testReference.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  reference_value: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  date_create_at: {
    type: DataTypes.DATE('current_timestamp'),
    allowNull: false,
  },
  observations: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: "0: inactivo 1 activo"
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  age_min: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  age_max: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  pregnant: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  tests_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  value_max: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  value_min: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  exams_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'exams',
      key: 'id'
    }
  },
  name_value: {
    type: DataTypes.STRING(150),
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'tests_reference_values',
  modelName: 'testReference',
  timestamps: true,
  createdAt: 'date_create_at',
});
export default testReference;