import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar()

class StudieResult extends Model { };

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
    type: DataTypes.STRING(100),
    allowNull: true
  },
  values_standard: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  observation: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  id_studie: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'studies',
      key: 'id'
    }
  },
  validate_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'studie_results',
  timestamps: true,
  createdAt: 'create_at', // Nombre de la columna de creación
  updatedAt: 'update_at', // Nombre de la columna de update
});

export default StudieResult;