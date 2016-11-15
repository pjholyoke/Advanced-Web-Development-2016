var express = require('express');
var router = express.Router();

// Controllers
var mainCtrl = require('../controllers/index');
var viewCtrl = require('../controllers/view');
var updateCtrl = require('../controllers/update');
var delCtrl = require('../controllers/delete');

var apiCtrl = require('../controllers/api');

router.get('/', mainCtrl.index);
router.post('/', mainCtrl.index)

/*router.get('/view', viewCtrl.index);

router.get('/update/:id', updateCtrl.index);
router.post('/update/:id', updateCtrl.index);

router.get('/delete/:id', delCtrl.index);*/

// API
router.get("/api/v1/employees", apiCtrl.api_getEmployees);
router.get("/api/v1/employees/:id", apiCtrl.api_getEmployee);
router.post("/api/v1/employees", apiCtrl.api_getEmployees);
router.delete("/api/v1/employees/:id", apiCtrl.api_deleteEmployee);
router.put("/api/v1/employees/:id", apiCtrl.api_updateEmployee);

module.exports = router;