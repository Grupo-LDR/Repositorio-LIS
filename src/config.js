import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
const configEnv = dotenv.parse(fs.readFileSync('.env', 'utf-8'));
const config = {};
for (const key in configEnv) {
    config[key] = configEnv[key];
}
console.log(config);
export default config;


