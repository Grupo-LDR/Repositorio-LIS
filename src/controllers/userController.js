import User from '../models/userModel.js';
import City from "../models/cityModel.js"
import Conexion from '../models/conexion.js';
Conexion.conectar();
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
                attributes: [
                    'first_name',
                    'last_name',
                    'gender',
                    'active',
                    'document',
                    'phone',
                    'email',
                    'address',
                    'birth_at',
                    'city_id',


                ],
                include: {
                    model: City,
                    attributes: ['name'],
                    as: 'City'
                }
            });
            //   [Conexion.sequelize.fn('DATEDIFF', Conexion.sequelize.literal('CURDATE()'), Conexion.sequelize.col('birth_at')), 'edad'],
            //   [Conexion.sequelize.fn('FLOOR', Conexion.sequelize.fn('DATEDIFF', Conexion.sequelize.literal('CURDATE()'), Conexion.sequelize.col('birth_at')) / 365.25), 'edad'],
            //   [Conexion.sequelize.fn('TIMESTAMPDIFF', Conexion.sequelize.literal('YEAR'), Conexion.sequelize.col('birth_at'), Conexion.sequelize.fn('CURDATE')),'edad'  ]
            //   [Conexion.sequelize.fn('FLOOR', Conexion.sequelize.fn('DATEDIFF', Conexion.sequelize.literal('CURDATE()'), Conexion.sequelize.col('birth_at')) / 365.25),'edad'],
            //   [Conexion.sequelize.fn('FLOOR', Conexion.sequelize.fn('DATEDIFF', Conexion.sequelize.literal('CURDATE()'), Conexion.sequelize.col('birth_at')) / 365.25),'edad'  ]

            if (user) {
                //   user.setDataValues.edad = this.calcularEdad(user.dataValues.birth_at);
                //user.setDataValue('edad', edad);
                return user;
            }
            return null;
        } catch (error) {
            console.error('Error user:', error);
            return null;
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
            const { first_name, last_name, gender, active, document, phone, email, address, date_birth_at, citys_id } = user;
            await User.create({ first_name, last_name, gender, active, document, phone, email, address, date_birth_at, citys_id });
            console.log("Creación de nuevo usuario -> Exitosa");
        } catch (error) {
            console.error('Error al crear un nuevo usuario:', error);
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

