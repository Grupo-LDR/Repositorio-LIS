import Express from "express";
import config from "../config.js";
class IndexRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getIndex);
    }
    getIndex(req, res) {
        res.render("index", { title: config.APP_NAME });
    }
    getRouter() {
        return this.router;
    }
}
export default IndexRouter;