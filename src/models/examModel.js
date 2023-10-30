import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import SampleType from './sampleTypeModel.js'
import Determination from './determination.js'
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
    allowNull: false,
    validate: {
      isUnsigned(value) {
        if (value < 0) {
          throw new Error('El valor de nbu debe ser un número entero sin signo.');
        }
      },
      isNumeric(value) {
        if (Number.isInteger(value)) {
          throw new Error('El valor de nbu debe ser un número entero.');
        }

      },

    },
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
    allowNull: true
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
  sequelize: Conexion.sequelize,
  tableName: 'exams',
  modelName: 'Exam',
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
      name: "fk_exams_exam_groups1_idx",
      using: "BTREE",
      fields: [
        { name: "sample_type_id" },
      ]
    },

    {
      name: "nbu_2",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "nbu" },
        { name: "detail" },
      ]
    },
  ]
});
/**
 * unique 
 */
// Exam.addConstraint('unique_nbu_detail', {
//   type: 'unique',
//   fields: ['nbu', 'detail'],
//   name: 'unique_nbu_detail',
// });
Exam.belongsTo(SampleType, { foreignKey: "sample_type_id" });
SampleType.hasMany(Exam, { foreignKey: "sample_type_id" })
Exam.hasMany(Determination, { foreignKey: "exams_id" });
Determination.belongsTo(Exam, { foreignKey: "exams_id" });
export default Exam;
