import Express from "express";
class MainRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getIndex);
    }
    getIndex(req, res) {
        res.render("menu");
    }
    getRouter() {
        console.log("getRouter");
        return this.router;
    }
}

export default MainRouter;