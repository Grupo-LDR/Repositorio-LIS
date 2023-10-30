const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exam_determinations', {
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
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'exam_determinations',
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
};
