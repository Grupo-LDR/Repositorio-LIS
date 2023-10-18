import State from "../models/stateModel.js";
class StateController {
    static async listSates() {
        try {
            const states = await State.findAll();
            return states;
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default StateController;