import studieResultController from "../controllers/studieResultController.js";
import express from "express";
class StudieResultRouter{
    constructor(){
        this.router=express.Router();
        this.router.get('/result',this.getResultUser);
        this.router.post('/',this.createResult);
        this.router.get('/print',this.printResult);
        
    }
    async getResultUser(req,res){
        try {
            
        } catch (error) {
            
        }
    }
    async createResult(req,res){
        try {
            
        } catch (error) {
            
        }
    }
    async printResult(req,res){
        try {
            
        } catch (error) {
            
        }
    }
    getRouter() {
        return this.router;
    }
}
export default StudieResultRouter