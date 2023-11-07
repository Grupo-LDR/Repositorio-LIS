import User from '../models/userModel.js';
import City from "../models/cityModel.js";
import AuthController from "./authController.js"
import Conexion from '../models/conexion.js';
import { z } from 'zod';
import zxcvbn from 'zxcvbn';

/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class UserController {
    static userSchema = z.object({
        id: z.number(),
        first_name: z.string().min(4).max(80).optional(),
        last_name: z.string().min(4).max(80).optional(),
        gender: z.enum(['M', 'F', 'X', '']),
        sex: z.enum(['M', 'F']),
        document: z.string().refine(document => /^\d{8}$/.test(document), {
            message: 'El número de documento debe tener 8 dígitos.'
        }).optional(),
        email: z.string().email().optional(),
        phone: z.number().refine(phone => /^\d{9,15}$/.test(phone), {
            message: 'El número de teléfono debe tener entre 9 y 15 dígitos.'
        }).optional(),
        address: z.string().optional(),
        birth_at: z.date().optional(),
        password: z.string().min(8).refine(password => zxcvbn(password).score >= 0, {
            message: 'La contraseña debe tener al menos una puntuación de seguridad de 0.'
        }),
        pregnant: z.literal(0).or(z.literal(1)).optional()
    });
    /**
     * verificacion de contraseña
      const password = 'mi_contraseña_secreta';
      const result = zxcvbn(password);
      console.log(`Puntuación de seguridad: ${result.score}`);
    */
    // crear un nuevo usuario con validacion
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
           const usuariosValido = this.userSchema.parse(user);
            const nuevoUsuario = await User.create({ usuariosValido });
            return nuevoUsuario;
        } catch (error) {
            throw error;
        }
    };

    /**
     * Buscar Usuarios
     * @returns 
     */
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
                    attributes: ['name']
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

    // actualizar un usuario
    // hashear contraseña ✅
    static async updateUsuario(user) {
        try {
            const userValido = this.userSchema.parse(user);
            // console.log("USUARIO VALIDO----->", userValido);
            // console.log("USER----->", user.password);
            const usuario = await User.findByPk(user.id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            if (user.password) {
                const nuevaPass = await AuthController.hashPassword(user.password);
                usuario.set({
                    password: nuevaPass,
                });
                // console.log("CONTRASEÑA:----->",nuevaPass)
            }
            if (user.password && usuario.nuevaPass) {
                const passValid = await AuthController.compararPass(user.pass, usuario.password);
                if (!passValid) {
                    throw new Error('La contraseña actual no es válida');
                }
            }
            usuario.set({
                first_name: userValido.first_name,
                last_name: userValido.last_name,
                gender: userValido.gender,
                sex: userValido.sex,
                document: userValido.document,
                email: userValido.email,
                phone: userValido.phone,
                address: userValido.address,
                birth_at: userValido.birth_at,
                city_id:userValido.city_id
            });
            await usuario.save();
            return usuario;
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw error;
        }
    }
    
}

export default UserController;