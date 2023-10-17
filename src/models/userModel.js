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
        type: DataTypes.CHAR(1),
        allowNull: false,
        comment: "M: masculino, F: femenino, X: gen x"
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: "0: inactivo, 1: activo"
    },
    document: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    date_birth_at: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
    date_create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    create_users_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true
    },
    date_update_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    update_users_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true
    },
    citys_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true
    }
}, {
    sequelize: Conexion.sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
                { name: "update_users_id" },
                { name: "create_users_id" },
                { name: "citys_id" },
            ]
        },
        {
            name: "fk_users_citys1_idx",
            using: "BTREE",
            fields: [
                { name: "citys_id" },
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

export default User;