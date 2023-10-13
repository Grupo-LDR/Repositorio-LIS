import Conexion from "./config.js"
import { Sequelize, DataTypes, Model } from 'sequelize';
// Conexion.conectar();
class User extends Model { }
User.init(
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_birth_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    citys_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize: Conexion.sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: false
  }
);

export default User;
