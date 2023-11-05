import studieResultController from "../controllers/studieResultController.js";
import express from "express";
/**
 *  REFERENCIAS:
 * ✅(Hecho) || ❌(sin hacer) || ⏳ (en proceso)
 */
class StudieResultRouter{
    constructor(){
        this.router=express.Router();
        this.router.get('/',this.getResultUser);
        this.router.post('/',this.createResult);
        // this.router.get('/ver',resultados);
        this.router.get('/print',this.printResult);
        
    }
    async getResultUser(req,res){ //✅(Hecho)
        try {
            const result = await studieResultController.resultados();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'No se pudo cargar los resultados' });

        }
    }
    
    async createResult(req,res){ //⏳ (en proceso)
        try {
            const resultado = req.body;
            // console.log(resultado)
            const result = studieResultController.createResult(resultado);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'No se pudo crear el resultado' });

        }
    }
    async printResult(req,res){ //❌(sin hacer)
        try {
            
        } catch (error) {
            
        }
    }
    getRouter() {
        return this.router;
    }
}
export default StudieResultRouter