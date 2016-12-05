var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api');

router.get("/employees", apiCtrl.api_getEmployees);
router.get("/employees/:id", apiCtrl.api_getEmployee);
router.post("/employees", apiCtrl.api_createEmployee);
router.delete("/employees/:id", apiCtrl.api_deleteEmployee);
router.put("/employees/:id", apiCtrl.api_updateEmployee);

module.exports = router;