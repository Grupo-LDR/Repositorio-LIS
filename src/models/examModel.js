import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
class Exam extends Model {
}

Exam.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  detail: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  common: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  update_at: {
    type: DataTypes.DATE('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  modelName: 'exam',
  tableName: 'exams',
  timestamps: true,
  createdAt: 'create_at', // Nombre de la columna de creación
  updatedAt: 'update_at',// Nombre de la columna de actualización
});
export default Exam;
