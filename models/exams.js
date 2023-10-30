const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exams', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nbu: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: "nbu_2"
    },
    detail: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: "nbu_2"
    },
    common: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      unique: "nbu_2"
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
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
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
      {
        name: "nbu",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nbu" },
        ]
      },
      {
        name: "nbu_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nbu" },
          { name: "detail" },
          { name: "status" },
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
};
