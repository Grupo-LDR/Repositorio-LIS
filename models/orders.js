const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    diagnosis: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    observation: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "0: inactivo\r\n1: activo\r\n2: ingresada\r\n3: toma meustra\r\n4: analitica\r\n5: paso a firma\r\n6: firmada\r\n7: entregada"
    },
    employee_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    create_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    update_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    validate_users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: true,
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
        name: "empleado",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "doctor",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "paciente",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
      {
        name: "fk_orders_users1_idx",
        using: "BTREE",
        fields: [
          { name: "validate_users_id" },
        ]
      },
    ]
  });
};
