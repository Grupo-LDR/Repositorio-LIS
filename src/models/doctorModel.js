import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Doctor extends Model { }
Doctor.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    date_create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_update_at: {
        type: DataTypes.DATE('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false,
    },
   license: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
}, {
    sequelize: Conexion.sequelize,
    modelName: 'Doctor',
    tableName: 'doctors',
    timestamps:true,
    createdAt: 'date_create_at', // Nombre de la columna de creación
    updatedAt: 'date_update_at'// Nombre de la columna de actualización
});
export default Doctor;