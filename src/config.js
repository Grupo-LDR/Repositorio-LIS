import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
const configEnv = dotenv.parse(fs.readFileSync('.env', 'utf-8'));
const config = {};
for (const key in configEnv) {
    config[key] = configEnv[key];
}
console.log(config);


// const config = {
//     APP_PORT: process.env.APP_PORT,
//     DB_HOST: process.env.DB_HOST,
//     DB_PORT: process.env.DB_PORT,
//     DB_USER: process.env.DB_USER,
//     DB_PASS: process.env.DB_PASS,
//     DB_DIALECT: process.env.DB_DIALECT,
//     DB_DATABASE: process.env.DB_DATABASE,
//     APP_NAME: process.env.APP_NAME

// };
export default config;


