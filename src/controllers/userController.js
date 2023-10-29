import User from '../models/userModel.js';
import City from "../models/cityModel.js"
//const usuario = new User();
class UserController {
    static async listUsers() {
        try {
            const users = await User.findAll({
                include: {
                    model: City,
                    attributes: ['name'],
                    // as: 'City'
                }
            });
            // console.log('tipo  ', typeof users);
            return users;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    static async findUser(id) {
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
                // console.log('User encontrado:', user);
                return user;
            } else {
                console.log('User no encontrado');
            }
        } catch (error) {
            console.error('Error user:', error);
        }
    }
    static calcularEdad(date_birth_at) {
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
    static async crearUsuario(user) {
        try {
            const { first_name, last_name, gender, sex,active, document, phone, email, address, birth_at, password,create_user_id, update_user_id,city_id,create_at,update_at,pregnant } = user;
            await User.create({ first_name, last_name, gender, sex,active, document, phone, email, address, birth_at, password,create_user_id, update_user_id,city_id,create_at,update_at,pregnant });
           //console.log("Creación de nuevo usuario -> Exitosa");
           return user;
        } catch (error) {
            //console.error('Error al crear un nuevo usuario:', error);
            throw error;
        }
    };
    static async updateUsuario(user) {
        try {
            const usuario = await User.findByPk(user.id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            usuario.set(user);
            await usuario.save();
            console.log("Actualización de usuario -> Exitosa");
        } catch (error) {
            console.error('Error al crear un nuevo usuario:', error);
            throw error;
        }
    }
}

export default UserController;

