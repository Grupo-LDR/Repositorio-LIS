import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model, DATE } from 'sequelize';
Conexion.conectar();

class Order extends Model { }
Order.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    diagnosis: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    observation: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
        comment: "0: inactivo, 1: activo"
    },
    patient_id: {
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
    employee_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    create_user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    update_user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at:{
        type: DataTypes.DATE('CURRENT_TIMESTAMP_ONUPDATE'),
        allowNull: true
    }
}, {
    sequelize: Conexion.sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
export default Order;