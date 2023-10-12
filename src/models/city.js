const conexion = require("./config")
const { Sequelize, DataTypes, Model } = require('sequelize');
conexion.conectar();
class City extends Model { }
City.init(
    {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    states_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        sequelize: conexion.sequelize,
        modelName: 'city',
        tableName: 'citys',
        timestamps: false
    })