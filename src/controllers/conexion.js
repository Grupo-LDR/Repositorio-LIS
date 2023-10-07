// carga variable entorno
require('dotenv').config();
if (process.env.NODE_ENV == 'dev') {
    require('dotenv').config({ path: '.env.dev' });
} else {
    require('dotenv').config({ path: '.env.prod' });
}
const CONFIG = JSON.parse(process.env.CONFIG);
// conexion base datos
const Sequelize = require('sequelize');
const conexion = new Sequelize(
    CONFIG.DB_DATABASE,
    CONFIG.DB_USENAME,
    CONFIG.DB_PASSWORD,
    {
        host: CONFIG.DB_HOST,
        dialect: CONFIG.DB_DIALECT,
        logging: false
    });

module.exports = { conexion };
