import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class SampleType extends Model { }
SampleType.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'exams',
      key: 'sample_type_id'
    }
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false
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
  sequelize:  Conexion.sequelize,
  tableName: 'samples_type',
  modelName:'SampleType',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at',
})
  
export default SampleType;