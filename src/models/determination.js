import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import ExamReferenceValues from './exam_reference_values.js';
import Exam from './examModel.js'
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
      exam_reference_values_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'exam_reference_values',
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
          name: "fk_exam_determinations_exam_reference_values1_idx",
          using: "BTREE",
          fields: [
            { name: "exam_reference_values_id" },
          ]
        },
        {
          name: "fk_exam_determinations_exams1_idx",
          using: "BTREE",
          fields: [
            { name: "exams_id" },
          ]
        },
      ]
});

Determination.belongsTo(ExamReferenceValues, {foreignKey: "exam_reference_values_id"});
ExamReferenceValues.hasMany(Determination, {foreignKey: "exam_reference_values_id"});
export default Determination;

