import { Sequelize as _Sequelize } from 'sequelize';
export default function (sequelize, DataTypes) {
  return sequelize.define('studies', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "estados de estudio TABLA"
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: _Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_validate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observations: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    orders_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    studie_results_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tests_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'studies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "orders_id" },
          { name: "studie_results_id" },
          { name: "tests_id" },
        ]
      },
      {
        name: "fk_studies_orders1_idx",
        using: "BTREE",
        fields: [
          { name: "orders_id" },
        ]
      },
      {
        name: "fk_studies_studie_results1_idx",
        using: "BTREE",
        fields: [
          { name: "studie_results_id" },
        ]
      },
      {
        name: "fk_studies_tests1_idx",
        using: "BTREE",
        fields: [
          { name: "tests_id" },
        ]
      },
    ]
  });
};
