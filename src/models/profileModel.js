import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import User from './userModel.js';
Conexion.conectar()

class Profile extends Model { };
Profile.init({
  id: {
    autoIncrement: true,
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    comment: "Serian los Roles:npor default todos son pacientes, asique no existe Tengo:doctor, tecnico, bioquimico, admin, recepcion",
    references: {
      model: 'users',
      key: 'id'
    }
  },
  access_auth: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  license: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    //defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  delete_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize:Conexion.sequelize,
  tableName: 'profiles',
  modelName:'Profile',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at',
  deletedAt: 'delete_at',
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "fk_profiles_users1_idx",
      using: "BTREE",
      fields: [
        { name: "users_id" },
      ]
    },
  ]
});
Profile.belongsTo(User,{foreignKey:"users_id"});
User.hasMany(Profile,{foreignKey:"users_id"});


export default Profile;