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
  date_update_at: {
    type: DataTypes.DATE('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    allowNull: true
  },
  date_create_at: {
    type: DataTypes.DATE('current_timestamp'),
    allowNull: false
  },
  license: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  date_delete_at: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    // references: {
    //   model: 'users',
    //   key: 'id'
    // }
  },
  users_update_users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    // references: {
    //   model: 'users',
    //   key: 'update_users_id'
    // }
  },
  users_create_users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    // references: {
    //   model: 'users',
    //   key: 'create_users_id'
    // }
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'profiles',
  modelName: 'Profile',
  timestamps: true,
  createdAt: 'date_create_at', // Nombre de la columna de creación
  updatedAt: 'update_at',// Nombre de la columna de actualización
}
)

export default Profile;