import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Order extends Model { }
Order.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    diagnostico: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: "0: inactivo, 1: activo"
    },
    date_create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    employee_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },

    doctor_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }

}, {
    sequelize: Conexion.sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,
    createdAt:'date_create_at',
    updatedAt: true
});
export default Order;