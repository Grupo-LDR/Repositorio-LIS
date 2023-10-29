import User from './userModel.js';
import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model, DATE } from 'sequelize';
Conexion.conectar();

class Order extends Model {
}
Order.init({
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
        comment: "0: inactivo, 1: activo"
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
      created_at:{
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at:{
        type: DataTypes.DATE,
        allowNull: true
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
      sequelize:Conexion.sequelize,
      tableName: 'orders',
      modelName:'Order',
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



export default Order;
