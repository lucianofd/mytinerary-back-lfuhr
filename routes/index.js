import 'dotenv/config';
import express from "express";
import '../controllers/cityController';
const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
