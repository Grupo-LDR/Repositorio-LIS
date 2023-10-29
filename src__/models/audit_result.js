/**
 * a modificar
 */
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_result', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    action_record: {
      type: DataTypes.ENUM('create','update','delete'),
      allowNull: true
    },
    data_record: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "datos exitentes en el registro modificado JSON"
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    studie_results_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'audit_result',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "users_id" },
          { name: "studie_results_id" },
        ]
      },
      {
        name: "fk_audit_record_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
      {
        name: "fk_audit_record_studie_results1_idx",
        using: "BTREE",
        fields: [
          { name: "studie_results_id" },
        ]
      },
    ]
  });
};
