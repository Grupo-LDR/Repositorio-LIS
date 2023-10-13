import { Sequelize as _Sequelize } from 'sequelize';
export default function (sequelize, DataTypes) {
  return sequelize.define('tests_reference_values', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reference_value: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: _Sequelize.literal('CURRENT_TIMESTAMP')
    },
    observations: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "0: inactivo 1 activo"
    },
    gender: {
      type: DataTypes.BOOLEAN,
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
    medical_conditions_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tests_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    value_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tests_reference_values',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "medical_conditions_id" },
          { name: "tests_id" },
        ]
      },
      {
        name: "fk_tests_reference_values_medical_conditions1_idx",
        using: "BTREE",
        fields: [
          { name: "medical_conditions_id" },
        ]
      },
      {
        name: "fk_tests_reference_values_tests1_idx",
        using: "BTREE",
        fields: [
          { name: "tests_id" },
        ]
      },
    ]
  });
};
