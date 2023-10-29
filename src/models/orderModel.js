import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model, DATE } from 'sequelize';
import User from './userModel.js';
import Studie from './studieModel.js';
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
      createdAt:'created_at',
      updatedAt:'updated_at',
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
Order.belongsTo(User, {foreignKey: "patient_id", as:"perteneceA"});
Order.belongsTo(User, {foreignKey: "employee_id", as:"creadoPor"});
Order.belongsTo(User, {foreignKey: "doctor_id",as:"Doctor"});
Order.belongsTo(User,{foreignKey:"validate_users_id"});
User.hasMany(Order,{foreignKey:"patient_id"});
User.hasMany(Order,{foreignKey:"employee_id"});
User.hasMany(Order,{foreignKey:"doctor_id"});
User.hasMany(Order,{foreignKey:"validate_users_id"});
Order.hasMany(Studie,{foreignKey: "order_id"});
Studie.belongsTo(Order,{foreignKey:"order_id"})



export default Order;
