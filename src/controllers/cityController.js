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
}

export default CityController;