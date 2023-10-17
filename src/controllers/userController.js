import User from '../models/userModel.js';
//const usuario = new User();
class UserController {
    static async listUsers() {
        try {
            const users = await User.findAll();
            const usersConEdad = users.map(user => {
                user.dataValues.edad = this.calcularEdad(user.dataValues.date_birth_at);
                return user;
            });
            const usersArray = usersConEdad.map(item => item.get({ plain: true }));
            console.log('tipo  ', typeof usersArray);
            return usersConEdad;
        }
        catch (error) {
            console.log(error);
        }
    }

    /*
    Usuario.findByPk(userId)
  .then((usuario) => {
    if (usuario) {
      // El usuario fue encontrado
      console.log('Usuario encontrado:', usuario.toJSON());
    } else {
      // El usuario no fue encontrado
      console.log('Usuario no encontrado');
    }
  })
  .catch((error) => {
    console.error('Error al buscar el usuario:', error);
  });
    */
    static async findUser(id) {
        try {
            const user = User.findByPk(id);
            if (user) {
                console.log('User encontrado:', user);
                return user;
            } else {
                console.log('User o encontrado');
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

