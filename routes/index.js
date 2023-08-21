import 'dotenv/config';
import express from "express";
import '../controllers/cityController';
import cityController from '../controllers/cityController';
const router = express.Router();


router.post('/cities', cityController.postCity);

router.get('/cities', cityController.getCities );

router.get('/cities/:name', cityController.getOneCity);

router.get('/cities/:id', cityController.getOneCity);
  
router.put('/cities/:id', cityController.putCity );

router.delete('/cities/:id', cityController.deleteCity );
 

export default router;
