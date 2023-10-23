/**
 * a modificar
 */
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
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
    employee_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    orders_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    action_records_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'audit_orders',
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
        name: "fk_audit_record_users1_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "fk_audit_orders_orders1_idx",
        using: "BTREE",
        fields: [
          { name: "orders_id" },
        ]
      },
      {
        name: "fk_audit_orders_action_records1_idx",
        using: "BTREE",
        fields: [
          { name: "action_records_id" },
        ]
      },
    ]
  });
};
