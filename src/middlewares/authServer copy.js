import Express from "express";
class AuthServer {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getAuthUser);
        this.router.post('/login', this.getAuthUser);
    }
    getAuthUser(req, res, next) {
        res.send('Responder con GET AUT');
    }
    getAuth() {
        return this.router;
    }


    // authUser(req, res, next) {
    //     const isAuth = false;
    //     console.clear();
    //     console.log(req);

    //     if (isAuth) {
    //         const alertMessage = 'Autorizado.';
    //         const htmlResponse = `

    //                <html>
    //                 <head>
    //                     <script>alert('${alertMessage}');</script>
    //                 </head>
    //                 <body>
    //                     <p>Redirigiendo a la página de LOGIN...</p>
    //                     <script>window.location.href = '/users';</script>
    //                 </body>
    //                 </html>

    //         `;
    //         //  res.send(htmlResponse);
    //         next();
    //     } else {
    //         // El usuario no está autenticado, muestra una alerta y luego redirige a la página de inicio.
    //         const alertMessage = 'Acceso denegado. Debes iniciar sesión.';
    //         const htmlResponse = `
    //             <html>
    //             <head>
    //                 <script>alert('${alertMessage}');</script>
    //             </head>
    //             <body>
    //                 <p>Redirigiendo a la página de LOGIN...</p>
    //                 <script>window.location.href = '/login';</script>
    //             </body>
    //             </html>
    //         `;
    //         //res.send(htmlResponse);
    //     }
    // }
}
export default AuthServer;