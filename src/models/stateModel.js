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
            type: DataTypes.DATE,
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
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
        ]
    });
export default State;
