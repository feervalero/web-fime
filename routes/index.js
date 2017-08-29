var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/practica-1', function(req, res, next) {
  res.render('practica-1', { title: 'Practica 1' });
});

router.get('/practica-2', function(req, res, next) {
  res.render('practica-2', { title: 'Practica 2' });
});

router.get('/practica-3', function(req, res, next) {
  res.render('practica-3', { title: 'Practica 3' });
});

router.get('/practica-4', function(req, res, next) {
  res.render('practica-4', { title: 'Practica 4' });
});

router.get('/practica-5', function(req, res, next) {
  res.render('practica-5', { title: 'Practica 5' });
});

router.get('/practica-6', function(req, res, next) {
  res.render('practica-6', { title: 'Practica 6' });
});

router.get('/practica-7', function(req, res, next) {
  res.render('practica-7', { title: 'Practica 7' });
});

router.get('/practica-8', function(req, res, next) {
  res.render('practica-8', { title: 'Practica 8' });
});



module.exports = router;
