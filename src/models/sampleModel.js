import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class Sample extends Model{};
Sample.init({
  id: {
    autoIncrement: true,
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
    defaultValue: Sequelize.fn('current_timestamp')
  },
  valid: {
    type: DataTypes.TINYINT,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'samples',
  timestamps: true,
  createdAt: 'date_create_at', // Nombre de la columna de creación
    updatedAt: 'date_update_at',// Nombre de la columna de actualización
});
   
export default Sample;