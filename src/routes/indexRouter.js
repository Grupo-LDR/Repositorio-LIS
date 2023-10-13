import Express from "express";
class IndexRouter {
    constructor() {
        this.router = Express.Router();
        this.router.get('/', this.getIndex);
       }
    getIndex(req, res) {
        res.render("index", { title: "Laboratorio" });

    }
    getRouter() {
        console.log("getRouter");
        return this.router;
    }
}

export default IndexRouter;