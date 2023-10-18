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
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  modelName: 'exam',
  tableName: 'exams',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});
export default Exam;
