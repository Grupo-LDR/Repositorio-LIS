import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Order extends Model {}
Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diagnostico: {
        type: DataTypes.STRING(80),
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
    comment: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    doctors_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        field: 'updatedAt'  //esto establece el nombre de la columna en la base de datos
    },
}, {
    sequelize: Conexion.conectar,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true, 
    updatedAt: 'updatedAt', //Configurar el nombre de la columna updatedAt en la db
    createdAt: 'date_create_at' //lo mismo para aca
});

export default Order;
