import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

class Config {
    constructor(entorno) {
        this.config = {};
        this.configEnv = {};

        if (entorno) {
            this.configEnv = dotenv.parse(fs.readFileSync('.dev.env', 'utf-8'));
        } else {
            this.configEnv = dotenv.parse(fs.readFileSync('.prod.env', 'utf-8'));
        }

        console.log(this.configEnv);

        for (const key in this.configEnv) {
            this.config[key] = this.configEnv[key];
        }

        console.log(this.config);
        return this.config;
    }
}
export default Config;
