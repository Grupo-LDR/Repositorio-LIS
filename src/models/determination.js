import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class Determination extends Model {
}
Determination.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  observation: {
    type: DataTypes.STRING(250),
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
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true,
    //defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'exam_determinations',
  modelName: 'Determination',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at',
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    }
  ]
});
export default Determination;

