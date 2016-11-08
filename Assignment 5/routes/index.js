var express = require('express');
var router = express.Router();

// Controllers
var mainCtrl = require('../controllers/index');
var viewCtrl = require('../controllers/view');
var updateCtrl = require('../controllers/update');
var delCtrl = require('../controllers/delete');

router.get('/', mainCtrl.index);
router.post('/', mainCtrl.index)

router.get('/view', viewCtrl.index);

router.get('/update/:id', updateCtrl.index);
router.post('/update/:id', updateCtrl.index);

router.get('/delete/:id', delCtrl.index);

module.exports = router;