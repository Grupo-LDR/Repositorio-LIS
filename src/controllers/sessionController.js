import Session from '../models/session.js';
import User from '../models/userModel.js';
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class SessionController {
    static async insert(session) { //✅
        try {
            const { token, token_date, user } = session;
            const newSession = await Session.create({ token, token_date, user });
            return newSession;
        } catch (error) {
            console.log('Error al guardar una sesion', error)
            throw error;
        }
    }
    /**
     * buscar session por ID
     * @param {User} id 
     * @returns la session del usuario
     */
    static async listById(id) { //✅
        try {
            const session = await Session.findByPk(id, {
                include:
                {
                    model: User,
                    attributes: ['first_name'],
                }
            });
            return session
        } catch (error) {
            throw error
        }
    }
    /**
     * VEREIFICAR ESTE METODO
     * @param {*} token 
     * @param {*} token_date 
     * @param {*} user_id 
     * @returns 
     */
    static async update(token, token_date, user_id) {//✅
        try {
          const session = await Session.findByPk(user_id);
          if (!session) {
            const newSession = await Session.create({
              token,
              token_date,
              user_id
            });
            return newSession;
          } else {
            await session.update({
              token,
              token_date,
            });
            return session;
          }
        } catch (error) {
          throw error;
        }
      }
      
    /** consulta para insertar o actualizar un registro
     *INSERT INTO `session`(`token`, `token_date`, `user_id`) VALUES ('afasdgfafgdjdfj','2023-11-03 07:41:51',2)
     * ON DUPLICATE KEY UPDATE `token` = 'nasdasdzfgasdfSDADSasdple.com' ,`token_date`='2023-11-02 00:00:00';
     */

}
export default SessionController