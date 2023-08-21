import 'dotenv/config';
import express from "express";
import '../controllers/cityController.js';
import cityController from '../controllers/cityController.js';
const router = express.Router();


router.post('cities', cityController.postCity);

router.get('cities', cityController.getCities );

router.get('cities/:name', cityController.getOneCity);

router.get('cities/:id', cityController.getOneById);
  
router.put('cities/:id', cityController.updateCity );

router.delete('cities/:id', cityController.deleteCity );
 

export default router;
