import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
class Exam extends Model {
}

Exam.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  nbu: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
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
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  id_exam_group: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'exam_groups',
      key: 'id'
    }
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
