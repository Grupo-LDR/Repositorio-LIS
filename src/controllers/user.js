import User from '../models/user.js';
import Conexion from '../models/config.js';
// Mostrar lista de usuarios
async function listarUsuarios() {
  try {
      const users = await User.findAll();
      console.log("Entró a listar usuarios");
      return users;
  } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      throw error;
  }
}
// Crear un nuevo usuario
 async function crearUsuario(req, res){
  try {
    const { first_name, last_name, gender, active, document, phone, email, address, date_birth_at, password, citys_id } = req.body;
    await User.create({ first_name, last_name, gender, active, document, phone, email, address, date_birth_at, password, citys_id });
    res.redirect('login');
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};
// Obtener informacion de un usuario por su ID
async function usuarioById(req, res){
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener información del usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};
// Actualizar la informacion de un usuario por su ID
async function actualizarUsuario(req, res){
  try {
    const userId = req.params.id;
    const newDataUser = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    await user.update(newDataUser);
    res.status(200).send('Usuario actualizado con éxito');
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

//cambiar contraseña
async function cambiarPass(req, res){
  try {
    const userId = req.user.id;
    const { passActaul, nuevaPass } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    if (!user.comparePassword(passActaul)) {
      return res.status(401).send('Contraseña actual incorrecta');
    }
    user.password = nuevaPass;
    await user.save();
    res.status(200).send('Contraseña actualizada con éxito');
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    res.status(500).send('Error interno del servidor');
  }
};
// recuperar contraseña
async function recuperarPass(req, res){
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    // Generar un token único y almacenarlo en la base de datos
    const resetToken = generarToken(); // crear esta funcion
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hora de validez
    await user.save();
    // Enviar un correo electrónico con el enlace de restablecimiento de contraseña
    sendPasswordResetEmail(user.email, resetToken); // Implementa esta función
    res.status(200).send('Correo electrónico de restablecimiento de contraseña enviado');
  } catch (error) {
    console.error('Error al enviar el correo electrónico de restablecimiento de contraseña:', error);
    res.status(500).send('Error interno del servidor');
  }
};
// asignar Rol de usuario
async function asignarRol(req, res){
  try {
    const userId = req.params.id;
    const { roleId } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).send('Rol no encontrado');
    }
    // Asignar el rol al usuario
    await user.setRole(role);
    res.status(200).send('Rol asignado con éxito');
  } catch (error) {
    console.error('Error al asignar el rol al usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};
// envio de notificaciones al usuario
async function enviarNotificacion(req, res){
  try {
    const userId = req.params.id;
    const message = req.body.message;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    // Envía la notificación al usuario, por ejemplo, a través de correo electrónico o notificación push
    sendNotification(user.email, message); // Implementa esta función
    res.status(200).send('Notificación enviada con éxito');
  } catch (error) {
    console.error('Error al enviar la notificación al usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};
// validar usuario
async function validarUsuario(req, res){
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    // Realiza la validación personalizada aquí
    if (!isValidUser(user)) {
      return res.status(400).send('Usuario no válido');
    }

    res.status(200).send('Usuario válido');
  } catch (error) {
    console.error('Error al validar el usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};
//generar un historico del usuario
async function getUserActivityHistory(req, res){
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    // Obtén el historial de actividad del usuario desde tu base de datos
    const activityHistory = await ActivityLog.findAll({ where: { userId } }); // Implementa esta función
    res.status(200).json(activityHistory);
  } catch (error) {
    console.error('Error al obtener el historial de actividad del usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

export {
  listarUsuarios,
  crearUsuario,
  usuarioById,
  cambiarPass,
  actualizarUsuario,
  asignarRol,
  recuperarPass,
  enviarNotificacion,
  validarUsuario,
  getUserActivityHistory
}