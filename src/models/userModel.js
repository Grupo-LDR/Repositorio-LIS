// userModel.js
import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class User extends Model {
  edad = '';
  calcularEdad() {
    if (this.date_birth_at) {
      const hoy = new Date();
      const fechaNacimiento = new Date(this.date_birth_at);
      const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
        return edad - 1;
      }
      return edad;
    }
    return null; // Devuelve null si la fecha de nacimiento no está definida
  }
}
User.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('M', 'F'),
    allowNull: false,
    comment: "M: masculino, F: femenino"
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: "0: inactivo, 1: activo"
  },
  document: {
    type: DataTypes.STRING(9),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: "email"
  },
  address: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  birth_at: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  create_users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  update_users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'citys',
      key: 'id'
    }
  },
  pregnant: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at', // Nombre de la columna de creación
  updatedAt: 'updated_at',// Nombre de la columna de actualización
});
export default User;