import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
class AuthController {
  static async hashPassword(pass) {
    const saltRounds = 10; //veces que se aplica el algoritmo de ahsheo
    return bcrypt.hash(pass, saltRounds);
  }

  static async compararPass(passActual, passHash) {
    return bcrypt.compare(passActual, passHash);
  }







  
/**
 * login
 * @param {} req 
 * @param {*} res 
 * @returns 
 *//*
  static async signUp(req, res) {
    try {
      const { email, pass } = req.body;

      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya existe' });
      }

      // Hashear la contraseña antes de almacenarla
      const hashedPassword = await AuthController.hashPassword(pass);

      // Crear el nuevo usuario en la base de datos
      const newUser = await User.create({ email, pass: hashedPassword });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
*/
/* logout
  static async signIn(req, res) {
    try {
      const { email, pass } = req.body;

      // Buscar al usuario por su correo electrónico
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      // Verificar si las contraseñas coinciden
      const passwordsMatch = await AuthController.comparePasswords(pass, user.pass);

      if (passwordsMatch) {
        // Las contraseñas coinciden, el usuario ha iniciado sesión con éxito
        // Aquí puedes generar un token de autenticación y devolverlo en la respuesta
        // También puedes implementar la lógica que necesites para la sesión del usuario.
        return res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }*/
}

export default AuthController;
