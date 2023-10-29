import User from '../models/userModel.js';
import City from "../models/cityModel.js"
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class UserController {
    //listar todos los usuarios
    static async listUsers() { //✅ 
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
        try {
            const user = await User.findByPk(id, {
                include: {
                    model: City,
                    attributes: ['name'],
                    as: 'City'
                }
            });
            if (user) {
                user.dataValues.edad = this.calcularEdad(user.dataValues.date_birth_at);
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
                password,
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
                password,
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
    static async updateUsuario(user) { //✅
        try {
            const usuario = await User.findByPk(user.id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            usuario.set(user);
            await usuario.save();
            // console.log("Usuario actualizado exitosamente");
            return usuario;
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw error;
        }
    }

    // asignar Rol de usuario 
    //❌(sin hacer)

    // hashear contraseña
    // ❌(sin hacer)

}

export default UserController;

