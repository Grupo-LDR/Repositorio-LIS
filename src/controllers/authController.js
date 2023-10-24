class AuthController {
    getLogin(req, res) {
        // Renderizar la página de inicio de sesión
        res.render('login');
    }

    postLogin(req, res) {
        // Verificar las credenciales y manejar el inicio de sesión
    }

    logout(req, res) {
        // Manejar el cierre de sesión
    }
}

export default new AuthController();