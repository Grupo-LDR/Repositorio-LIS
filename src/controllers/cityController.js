import City from "../models/cityModel.js";
import State from "../models/stateModel.js";
class CityController {
    static async listCitys() {
        try {
            const citys = await City.findAll();
            return citys;
        }
        catch (error) {
            console.log(error);
        }
    }
    static async findCity(id){
        try {
           const city=await City.findByPk(id);
            if(city){
                return city;
            }else{
                console.log('City no encontrada'); 
            }
        } catch (error) {
            
        }

    }
}

export default CityController;