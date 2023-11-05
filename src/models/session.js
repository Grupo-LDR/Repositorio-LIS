import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
import User from './userModel.js';
Conexion.conectar();
class Session extends Model {}

Session.init(
  {
    sid: {
      type: DataTypes.STRING(150),
      primaryKey: true,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    token_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
  },
  {
    sequelize: Conexion.sequelize,
    modelName: 'Session',
    tableName: 'session',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

User.hasOne(Session, { foreignKey: 'user_id' });

export default Session;
