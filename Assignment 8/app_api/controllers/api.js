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
    Employee.findById(req.params.id, function (err, doc) {
      doc.firstName  = req.body.fname;
      doc.lastName   = req.body.lname;
      doc.department = req.body.dept;
      doc.startDate  = req.body.date;
      doc.jobTitle   = req.body.title
      doc.salary     = req.body.salary
      doc.save();

      res.status(200);
      res.send("Employee updated!");
    });
  }
};

module.exports.api_deleteEmployee = function(req, res) {
  var emp = Employee.findById(req.param('id'));

  Employee.findById(req.param('id')).remove().exec(function(err, results) {
    res.status(200);
    res.send("Employee fired.");
  });
};

module.exports.api_createEmployee = function(req, res) {
  if (req.method === 'POST') {
    Employee.create({
      firstName:  req.body.fname,
      lastName:   req.body.lname,
      department: req.body.dept,
      startDate:  req.body.date,
      jobTitle:   req.body.title,
      salary:     req.body.salary
    }, function() {
      res.status(200);
      res.send("Employee hired.");
    });

  } else {
    // Do nothing
  }   

}