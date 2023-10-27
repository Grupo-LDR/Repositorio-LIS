import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar()

class StudieResult extends Model{};

StudieResult.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 2,
      comment: "estados de resultado en 1 valido, 0 no valido 2 en proceso "
    },
    values: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    values_standard: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE('current_timestamp'),
      allowNull: false,
    },
    update_at:{
      type: DataTypes.DATE(),
      allowNull: false
    },
    date_validate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observations: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    studies_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  }, {
    sequelize:Conexion.sequelize,
    tableName: 'studie_results',
    timestamps: true,
    createdAt: 'create_at', // Nombre de la columna de creación
    updatedAt: 'update_at'
  });

  export default StudieResult;