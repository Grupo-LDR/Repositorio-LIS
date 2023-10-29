import {City,State} from '../models/relationShip.js'
class CityController {
    static async listCitys() {
        try {
            const citys = await City.findAll({
                include:{
                    model: State,
                    attributes: ['name'],
                    as: 'Provincia'
                }
            });
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