import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class Diagnostico extends Model {
}
Diagnostico.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo:{
        type:DataTypes.STRING(5)
    },
    name:{
       type:DataTypes.STRING(200) 
    }
},{  
    sequelize:Conexion.sequelize,
    tableName:'diagnosis',
    timestamps:true
});
export default Diagnostico;