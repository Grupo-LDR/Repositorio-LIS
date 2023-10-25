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
        type: DataTypes.STRING(80),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    license: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    update_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: Conexion.sequelize,
    modelName: 'Doctor',
    tableName: 'doctors',
    timestamps: true,
    createdAt: 'create_at', // Nombre de la columna de creación
    updatedAt: 'update_at'// Nombre de la columna de actualización
});
export default Doctor;