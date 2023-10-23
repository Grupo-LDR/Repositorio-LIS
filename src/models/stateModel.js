import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
class State extends Model {

}
State.init(
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        date_update_at: {
            type: DataTypes.DATE('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: true
        },
        date_create_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    },
    {
        sequelize: Conexion.sequelize,
        modelName: 'state',
        tableName: 'states',
        timestamps: true,
        createdAt: 'date_create_at', // Nombre de la columna de creación
        updatedAt: 'date_update_at',// Nombre de la columna de actualización
    });
export default State;
