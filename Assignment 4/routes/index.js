var express = require('express');
var router = express.Router();

// Controllers
var mainCtrl = require('../controllers/index');
var aboutCtrl = require('../controllers/about');
var formCtrl = require('../controllers/form');

/* GET home page. */
router.get('/', mainCtrl.index);
router.get('/about', aboutCtrl.index);
router.get('/form', formCtrl.formView);
router.post('/form', formCtrl.formPost);

module.exports = router;