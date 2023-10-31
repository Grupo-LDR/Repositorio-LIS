import User from '../models/userModel.js';
import City from "../models/cityModel.js";
import AuthController from "./authController.js"
import Conexion from '../models/conexion.js';
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class UserController {


    static async listUsers() { //✅
        try {
            const usersWithAgeQuery = 'SELECT User.*, YEAR(FROM_DAYS(DATEDIFF(CURDATE(), birth_at))) AS edad, City.id AS Cityid, City.name AS Cityname FROM users AS User LEFT OUTER JOIN citys AS City ON User.city_id = City.id';
            const users = await Conexion.sequelize.query(usersWithAgeQuery, {
                type: Conexion.sequelize.QueryTypes.SELECT,
                model: User,
                mapToModel: true, //mapea el user y me trae
            });
            return users;
        } catch (error) {
            console.error('Error al listar usuarios:', error);
            throw error;
        }
    }
    //listar todos los usuarios
    static async listUsers_2() { //✅ 
        try {
            const users = await User.findAll({
                include: {
                    model: City,
                    attributes: ['name'],
                    // as: 'City'
                }
            });
            return users;
        } catch (error) {
            console.error('Error al listar usuarios:', error);
            throw error; // -> relanzar el error
        }
    }
    //buscar usuario por ID
    static async findUser(id) { //✅
        console.log('entro user find', id);
        try {
            const user = await User.findByPk(id, {
                include: {
                    model: City,
                    attributes: ['name'],
                    as: 'City'
                }
            });
            if (user) {
                user.dataValues.edad = this.calcularEdad(user.dataValues.birth_at);
                return user;
            } else {
                throw new Error('Usuario no encontrado');
            }
        } catch (error) {
            console.error('Error al buscar usuario por ID:', error);
            throw error;
        }
    }
    //calculo de edad 
    static calcularEdad(date_birth_at) {//✅
        if (date_birth_at) {
            const hoy = new Date();
            const fechaNacimiento = new Date(date_birth_at);
            const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

            if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
                return edad - 1;
            }
            return edad;
        }
    }
    // crear un nuevo usuario
    static async crearUsuario(user) { //✅
        try {
            const nuevaPass = await AuthController.hashPassword(user.password);
            const { first_name,
                last_name,
                gender,
                sex,
                active,
                document,
                phone,
                email,
                address,
                birth_at,
                create_user_id,
                update_user_id,
                city_id,
                create_at,
                update_at,
                pregnant } = user;

            const nuevoUsuario = await User.create({
                first_name,
                last_name,
                gender,
                sex,
                active,
                document,
                phone,
                email,
                address,
                birth_at,
                password: nuevaPass,
                create_user_id,
                update_user_id,
                city_id,
                create_at,
                update_at,
                pregnant
            });
            return nuevoUsuario;
        } catch (error) {
            throw error;
        }
    };
    // actualizar un usuario
    // hashear contraseña ✅
    static async updateUsuario(user) {//✅
        try {
            const usuario = await User.findByPk(user.id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            // Verificar si la contraseña actual coincide
            if (user.pass && user.newPassword) {
                const passValid = await AuthController.compararPass(user.pass, usuario.password);
                if (!passValid) {
                    throw new Error('La contraseña actual no es válida');
                }
                // Hashear y actualizar la nueva contraseña
                const nuevaPass = await AuthController.hashPassword(user.newPassword);
                usuario.set({
                    password: nuevaPass,
                });
            } else {
                usuario.set(user);
            };
            console.log(usuario);
            await usuario.save();
            return usuario;
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw error;
        }
    }
    // asignar Rol de usuario 
    //❌(sin hacer)


}

export default UserController;

