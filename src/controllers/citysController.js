import Citys from "../models/citysModel.js";
class CitysController {
    static async listCitys() {
        try {
            const citys = await Citys.findAll();
            return citys;
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default CitysController;