import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import Exam from './examModel.js'
import Sample from './sampleModel.js'


Conexion.conectar();

class Studie extends Model { }
Studie.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  order_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  exams_id: {
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
  samples_id: {
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
  sequelize:Conexion.sequelize,
  tableName: 'studies',
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
    {
      name: "fk_studies_orders1_idx1",
      using: "BTREE",
      fields: [
        { name: "order_id" },
      ]
    },
    {
      name: "fk_studies_exams1_idx",
      using: "BTREE",
      fields: [
        { name: "exams_id" },
      ]
    },
    {
      name: "fk_studies_samples1_idx",
      using: "BTREE",
      fields: [
        { name: "samples_id" },
      ]
    },
  ]
});
Studie.belongsTo(Exam, {foreignKey: "exams_id"});
Exam.hasMany(Studie,{foreignKey:"exams_id"});
Studie.belongsTo(Sample,{foreignKey: "samples_id"});
Sample.hasOne(Studie,{foreignKey:"samples_id"});
export default Studie;

