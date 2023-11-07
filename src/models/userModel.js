import City from './cityModel.js';
import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class User extends Model {

  // edad = '';
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
  get edad() {
    if (this.birth_at) {
      const hoy = new Date();
      const fechaNacimiento = new Date(this.birth_at);
      const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
        return edad - 1;
      }
      return edad;
    }
    return null; // si no hay fecha de nacimiento
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
    allowNull: false,
    /*  validate: {
        notEmpty: {
          msg: 'El nombre no puede estar vacío.'
        },
        len: {
          args: [3, 80],
          msg: 'El nombre debe tener entre 3 y 80 caracteres.',
        },
        // isAlpha: {
        //   msg: 'El nombre debe contener solo letras.',
        // },
      },
    */
  },
  last_name: {
    type: DataTypes.STRING(80),
    allowNull: false,
    /*    validate: {
          notEmpty: {
            msg: 'El Apellido no puede estar vacío.',
          },
          len: {
            args: [3, 80],
            msg: 'El Apellido debe tener entre 3 y 80 caracteres.',
          },
          isAlpha: {
            msg: 'El apellido debe contener solo letras.',
          },
        },
        */
  },
  gender: {
    type: DataTypes.ENUM('M', 'F', 'X'),
    allowNull: false,
    comment: "M: masculino, F: femenino, X: gen x"
  },
  sex: {
    type: DataTypes.ENUM('M', 'F'),
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: "0: inactivo, 1: activo"
  },
  document: {
    type: DataTypes.STRING(9),
    allowNull: false,
    unique: {
      args: true,
      msg: 'El documento ya existe en la base de datos.',
    }
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: {
      args: true,
      msg: 'El correo electrónico ya existe en la base de datos.',
    },
    validate: {
      isEmail: {
        msg: 'El correo electrónico debe ser válido.',
      },
    }
  },
  address: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  birth_at: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    validate: {
      isDate: {
        msg: 'La fecha de nacimiento debe ser válida.',
      },
    }
  },
  password: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  create_users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
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
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  pregnant: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'users',
  modelName: 'User',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
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
      name: "email",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "email" },
      ]
    },
    {
      name: "document",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "document" },
      ]
    },
    {
      name: "fk_users_citys1_idx",
      using: "BTREE",
      fields: [
        { name: "city_id" },
      ]
    },
    {
      name: "fk_users_users1_idx",
      using: "BTREE",
      fields: [
        { name: "update_users_id" },
      ]
    },
  ]
});
User.belongsTo(City, { foreignKey: "city_id" });
City.hasMany(User, { foreignKey: "city_id" });
User.belongsTo(User, { foreignKey: "create_users_id" })
User.belongsTo(User, { foreignKey: "update_users_id" })
User.hasMany(User, { foreignKey: "create_users_id" });
User.hasMany(User, { foreignKey: "update_users_id" });
export default User;