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
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  sample_type_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'samples_type',
      key: 'id'
    }
  },
  time: {
    type: DataTypes.TINYINT,
    allowNull: false,
    comment: " tiempo de obtencion resutlado"
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize:Conexion.sequelize,
  tableName: 'exams',
  modelName:'Exam',
  timestamps: true,
  createdAt:'create_at',
  updatedAt:'update_at',
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "fk_exams_exam_groups1_idx",
      using: "BTREE",
      fields: [
        { name: "sample_type_id" },
      ]
    },
  ]
});
export default Exam;
