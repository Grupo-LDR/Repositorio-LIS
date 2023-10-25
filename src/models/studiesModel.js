import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Studie extends Model { }
Studie.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        }

    },
    exams_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'exams',
            key: 'id'
        }
    },
    test_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'tests_reference_values',
            key: 'id'
        }
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
    update_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    observations: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    date_validate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    studie_results_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'studie_results',
            key: 'id'
        }
    },
    samples_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'samples',
            key: 'id'
        }
    }
}, {
    sequelize: Conexion.sequelize,
    modelName: 'Studies',
    tableName: 'studies',
    timestamps: true,
    createdAt:'date_create_at',
    updatedAt: 'update_at'
});
export default Studie;

