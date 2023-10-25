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
        update_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        create_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        }
    },
    {
        sequelize: Conexion.sequelize,
        modelName: 'state',
        tableName: 'states',
        timestamps: true,
        createdAt: 'create_at', // Nombre de la columna de creación
        updatedAt: 'update_at',// Nombre de la columna de actualización
    });
export default State;
