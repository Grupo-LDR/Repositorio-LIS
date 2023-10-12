import Express from "express";
class UserRoutes {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getUser);
        this.router.post('/', this.createUser);
    }

    getUser(req, res, next) {
        res.send('Responder con GET users');
    }

    createUser(req, res, next) {
        res.send('Responder con POST user');
    }

    getRouter() {
        return this.router;
    }
}

export default UserRoutes;