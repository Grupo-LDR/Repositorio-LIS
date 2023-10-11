const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

class conexion {
  static sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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

module.exports = conexion;
