import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class Determination extends Model {
}
Determination.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    name_determination: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    min: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    max: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tiempo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    comentarios: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    exam_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
}, {
    sequelize: Conexion.sequelize,
    tableName: 'determinations',
    modelName: 'Determination',
    timestamps: true,
});
export default Determination;

