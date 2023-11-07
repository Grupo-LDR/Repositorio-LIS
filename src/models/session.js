import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import User from './userModel.js';
Conexion.conectar();
class Session extends Model {
}
Session.init({
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    token:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    token_date:{
        type: DataTypes.DATE,
        allowNull: false

    }
},{
    sequelize:Conexion.sequelize,
    modelName:'session',
    tableName:'session',
    timestamps:true
});
User.hasOne(Session,{foreignKey:'user_id'})


export default Session;