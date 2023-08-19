import 'dotenv/config';
import express from "express";
import `../cityController` 

const router = express.Router();

/* GET home page. */
router.get('/', cityController.getCities) 


export default router;
