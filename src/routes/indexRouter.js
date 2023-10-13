import Express from "express";
import config from "../config.js";
class IndexRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getIndex);
    }
    getIndex(req, res) {
        console.log(`${config.APP_PORT} Esto vien de index.js`);
        res.render("index", { title: config.APP_NAME });

    }
    getRouter() {
        console.log("getRouter");
        return this.router;
    }
}

export default IndexRouter;