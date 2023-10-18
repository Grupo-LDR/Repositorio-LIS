import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class City extends Model {

}
City.init({
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
    states_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
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
}, {
    sequelize: Conexion.sequelize,
    tableName: 'citys',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
                { name: "states_id" },
            ]
        },
        {
            name: "fk_citys_states1_idx",
            using: "BTREE",
            fields: [
                { name: "states_id" },
            ]
        },
    ]
});
export default City;