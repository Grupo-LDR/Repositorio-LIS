import dotenv from 'dotenv';

dotenv.config();

class Config {
    static config = {
        // variables de entorno 
        APP_PORT: process.env.APP_PORT || 3000,
        DB_HOST: process.env.DB_HOST || 'localhost',
    };
}
export default Config;
