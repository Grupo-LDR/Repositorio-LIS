// import crypto from 'crypto';
// import hrtime from 'process';
// import { v4 as uuidv4 } from 'uuid';
// const uuid = uuidv4();
// console.log('UUID generado:', uuid);
import config from '../config.js';
//console.log(config);

class AuthServer {
    constructor() {


    }
    auth(req, res) {
        const tokken = config.APP_SECRET;
        res.send(
            `<h1>Esta autorizado a usar  el servicio<br> ${req.connection.remoteAddress} <br>tokken<br> ${tokken}</h1>`
        );
    }
    authUser(req, res, next) {
        console.clear;
        console.log('user', user1);
        if ('2' == '1') {
            res.send(`<h1>Esta autorizado a usar  el servicio ${user1}</h1>`);
        } else {
            res.send(`Esta autorizado a usar  el servicio ${user1}`);
            // next();
        }

    }
    /**
    authUser(req, res, next) {
        res.send('No esta autorizado a usar  el servicio');
        next();
                //  console.log(req.connection.remoteAddress);
                //  console.log(hrtime.hrtime()[1]);
                //  console.log(Date.now());
                const semilla = req.connection.remoteAddress + hrtime.hrtime()[0] + Date.now();
                //  console.log(semilla);
                const hash = crypto.createHash('sha256').update(semilla).digest();
                const firma = hash.toString('hex');
        
                //const firma = crypto.createHash('sha256').update(req.connection.remoteAddress + hrtime.hrtime()[0] + Date.now()).digest();
                //     console.log(firma);
                // verifico cookie
                const app_cookie = req.cookies.app_cookie;
                if (app_cookie) {
                    //res.clearCookie('app_cookie');
                    // res.send(`Cookie capturada: ${app_cookie}`);
                } else {
                    res.cookie('app_cookie', 'adsf', { maxAge: 900000, httpOnly: true });
                    // res.send('La cookie no está presente');
                }
                // console.log(app_cookie);
                const isAuth = true;
                // console.clear();
                console.log(req.body);
                if (!isAuth) {
                    const alertMessage = 'Autorizado.';
                    const htmlResponse = `
                           <html>
                            <head>
                                <script>alert('${alertMessage}');</script>
                            </head>
                            <body>
                                <p>Redirigiendo a la página de LOGIN...</p>
                                <script>window.location.href = '/users';</script>
                            </body>
                            </html>
                    `;
                    res.send(htmlResponse);
                    //   next();
                } else {
                    // No auth,  alerta y redirige a inicio.
                    const alertMessage = 'Acceso denegado. Debes iniciar sesión.';
                    const htmlResponse = `
                        <html>
                        <head>
                            <script>alert('${alertMessage}');</script>
                        </head>
                        <body>
                            <p>Redirigiendo a la página de LOGIN...</p>
                            <script>window.location.href = '/login';</script>
                        </body>
                        </html>
                    `;
                    res.send(htmlResponse);
                }
                */
}

export default AuthServer;