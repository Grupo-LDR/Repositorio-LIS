import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar()

class Studie extends Model{};

Studie.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: "estados de estudio TABLA"
    },
    date_create_at: {
        type: DataTypes.DATE('current_timestamp'),
        allowNull: false,
    },
    update_at: {
        type: DataTypes.DATE('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: true
    },
    date_validate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    observations: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    studie_results_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    tests_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //     model: 'orders',
        //     key: 'id'
        // }
    },
    exams_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //     model: 'exams',
        //     key: 'id'
        // }
    },
    samples_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        // references: {
        //     model: 'samples',
        //     key: 'id'
        // }
    }
}, {
    sequelize: Conexion.sequelize,
    tableName: 'studies',
    modelName: 'Studie',
    timestamps: true,
    createdAt: 'date_create_at', // Nombre de la columna de creación
    updatedAt: 'update_at',// Nombre de la columna de actualización
});

export default Studie;