import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar()

class Profile extends Model { };
Profile.init({
  id: {
    autoIncrement: true,
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  access_auth: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  license: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  delete_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  id_user: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'profiles',
  modelName: 'Profile',
  timestamps: true,
  createdAt: 'create_at', // Nombre de la columna de creación
  updatedAt: 'update_at',// Nombre de la columna de actualización
}
)

export default Profile;