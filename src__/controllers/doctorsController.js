import Doctor from "../models/doctorModel.js";

class doctorController{
    static async listarDoctores(){
       try {
        const doctor = await Doctor.findAll();
        console.log(doctor)
        return doctor;
       } catch (error) {
        console.log(error,"error al obtener doctores")
       } 
    }

}
export default doctorController