// userModel.js
import Conexion from '../models/conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();
class User extends Model {
    edad = 99;

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
    },
},
    {
        //        conn: Conexion.conectar(),
        sequelize: Conexion.sequelize,
        modelName: 'user',
        tableName: 'users',
        timestamps: false
    });
export default User;