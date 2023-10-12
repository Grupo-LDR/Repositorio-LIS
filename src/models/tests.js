import { Sequelize as _Sequelize } from 'sequelize';
export default function (sequelize, DataTypes) {
  return sequelize.define('tests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    common_name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "0: inactivo 1 activo"
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
    time_process: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "en dias habiles"
    },
    results_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tests_determination_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    requeriments: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    samples_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "results_id" },
          { name: "tests_determination_id" },
          { name: "samples_id" },
        ]
      },
      {
        name: "fk_tests_tests_determination1_idx",
        using: "BTREE",
        fields: [
          { name: "tests_determination_id" },
        ]
      },
      {
        name: "fk_tests_samples1_idx",
        using: "BTREE",
        fields: [
          { name: "samples_id" },
        ]
      },
    ]
  });
};
