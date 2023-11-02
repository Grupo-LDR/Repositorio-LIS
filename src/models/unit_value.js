import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class UnitValue extends Model {
}
UnitValue.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
       type:DataTypes.STRING(200)
    }
},{
    sequelize:Conexion.sequelize,
    modelName:'UnitValue',
    tableName:'unit_value',
    timestamps:true
});

export default UnitValue;