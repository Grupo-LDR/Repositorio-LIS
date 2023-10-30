import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import State from './stateModel.js';
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
        references: {
            model: 'states',
            key: 'id'
        }
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
}, {
    sequelize: Conexion.sequelize,
    tableName: 'citys',
    tableModel: 'city',
    timestamps: true,
    createdAt: 'create_at', // Nombre de la columna de creación
    updatedAt: 'update_at',// Nombre de la columna de actualización
    indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
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
City.belongsTo(State, {foreignKey: "states_id" });
State.hasMany(City, { foreignKey: "states_id" });


export default City;