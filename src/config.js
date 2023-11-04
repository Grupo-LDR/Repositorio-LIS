import seedrandom from 'seedrandom';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
const configEnv = dotenv.parse(fs.readFileSync('.prod.env', 'utf-8'));
const config = {};
for (const key in configEnv) {
    config[key] = configEnv[key];
}
if (!config.APP_SECRET_2) {

    config.APP_SECRET_2 = true;
    config.APP_SECRET = calcSeed(config.APP_SECRET);
}

function calcSeed(secret) {
    //calcula una semilla aleatoria para el token
    let seed = '';
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const seedMax = secret.length;
    const alphaMax = alfabeto.length;
    const rng = seedrandom();
    for (let i = 0; i < secret.length; i++) {
        const alphaAleatorio = Math.floor(rng() * alphaMax); // Usa el generador aleatorio
        const seedAleatorio = Math.floor(rng() * seedMax);
        seed += alfabeto[alphaAleatorio];
        seed += secret[seedAleatorio];
    }
    seed = btoa(seed);
    console.trace(seed);
    return seed;
}
export default config;