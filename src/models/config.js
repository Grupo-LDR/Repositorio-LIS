import { Sequelize } from 'sequelize';
import config from "../config.js"

class conexion {
  static sequelize = new Sequelize({
    dialect: config.DB_DIALECT,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASS,
    database: config.APP_NAME,
  });

  static async conectar() {
    try {
      await this.sequelize.authenticate();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }

  static async cerrar() {
    try {
      await this.sequelize.close();
      console.log('Conexión cerrada');
    } catch (error) {
      console.error('Error al cerrar la conexión:', error);
    }
  }
}

export default conexion;
