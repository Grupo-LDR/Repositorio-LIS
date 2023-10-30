import express from "express";
import SampleTypeController from "../controllers/sampleTypeController.js";

class SampleTypeRouter {
    constructor() {
        this.router = express.Router();
        //        this.router.get('/', this.getSampleType);
        this.router.post('/', this.postSampleType);
        this.router.get('/', this.getSampleType);
    }

    async getSampleType(req, res) {
        try {
            const sampleTypes = await SampleTypeController.listSampleTypes();
            res.status(200).json(sampleTypes);
        } catch (error) {
            console.error('Error al obtener  tipo muestras:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    /**
     * New sample type
     * @param {*} req 
     * @param {*} res 
     */
    async getSampleType(req, res) {
        try {
            const sampleTypes = await SampleTypeController.listSampleTypes();
            //     console.log('sampleTypes', sampleTypes);
            res.status(200).json(sampleTypes);
            // res.render('./samples/sampleTypeNewView.pug', { samples: sampleTypes });
        } catch (error) {
            console.error('Error al obtener  tipo muestras:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    async postSampleType(req, res) {
        try {

            let sampleType = false;
            if (req.body.edit || req.body.del) {
                console.log('entro por edit');
                sampleType = await SampleTypeController.updateSampleType(req.body);
            } else {
                console.log('ruteo en neuva sampletype');
                sampleType = await SampleTypeController.createSampleType(req.body);
            }
            if (await sampleType) {
                console.log('samplesType', sampleType);
                res.redirect('/samplestype');
            } else {
                res.status(404).send('No pudo completarse');
            }
        } catch (error) {
            console.error('Error al crear tipo muestras:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    getRouter() {
        return this.router;
    }
}
export default SampleTypeRouter;

