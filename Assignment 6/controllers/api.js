var Employee = require('../models/employee');

module.exports.api_getEmployees = function(req, res) {
  // Print the json.
  Employee.find().exec(function(err, results) {

    for (var i in results) {
      var d = new Date(results[i]["startDate"]);
      results[i]["startDate"] = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
    }

    res.json(results);
  });
};

module.exports.api_getEmployee = function(req, res) {
  Employee.findById(req.param('id'), function(err, results) {
    res.json(results);
  });
};

module.exports.api_updateEmployee = function(req, res) {
  if (req.method === 'PUT') {
    console.log(req.body.fname);
    Employee.findById(req.params.id, function (err, doc) {
      doc.firstName = req.body.fname;
      doc.lastName = req.body.lname;
      doc.department = req.body.dept;
      doc.startDate = req.body.date;
      doc.jobTitle = req.body.title
      doc.salary = req.body.salary
      doc.save();
    });
  }
};

module.exports.api_deleteEmployee = function(req, res) {
  var emp = Employee.findById(req.param('id'));
  
  Employee.findById(req.param('id')).remove().exec(function(err, results) {
    res.render('deleted', {
      name: emp["fname"]+' '+emp['lname']
    });
  });
};