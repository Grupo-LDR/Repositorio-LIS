import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Sample extends Model { };
Sample.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  valid: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  observation: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'samples',
  modelName:'Sample',
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
  ]
});

export default Sample;