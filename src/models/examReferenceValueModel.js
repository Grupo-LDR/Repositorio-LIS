import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import Determination from './determination.js';
import UnitValue from './unit_value.js'
Conexion.conectar();
class ExamReferenceValues extends Model { };
ExamReferenceValues.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  determination_id:{
    type: DataTypes.INTEGER,
    allowNull:true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: "0: inactivo 1 activo"
  },
  sex: {
    type: DataTypes.ENUM('M','F'),
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
    defaultValue: 0
  },
  value_max: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "alor max poible"
  },
  value_min: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "Valor minimo posible"
  },
  value_ref_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "valor max para persana sana"
  },
  value_ref_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "valo rmin para persona sana"
  },
  unit_value_id: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  observation: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  }
}, {
  sequelize:Conexion.sequelize,
  tableName: 'exam_reference_values',
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
    },
  ]
});
ExamReferenceValues.belongsTo(Determination, { foreignKey: 'determination_id'});
Determination.hasMany(ExamReferenceValues, { foreignKey: 'determination_id'});
ExamReferenceValues.hasMany(UnitValue,{foreignKey:'unit_value_id'});
UnitValue.belongsTo(ExamReferenceValues,{foreignKey:'unit_value_id'});


export default ExamReferenceValues;