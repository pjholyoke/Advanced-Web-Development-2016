module.exports.index = function(req, res) {
  
var Employees = require('../models/employee');

  Employees.find().exec(function(err, results) {
    res.render('view', {               
      title: "View Page",
      allResults : results,
      err: err
    });
  });
}