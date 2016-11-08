var Employee = require('../models/employee');

module.exports.index = function(req, res) {

  var msg = '';
  function successCB(){
    res.render('index', {
      title: 'New Employee Added!',
      message : 'Employee Added!'
    });        
  }
  if (req.method === 'POST') {
    console.log(req.body);
    
    Employee.create({
      firstName: req.body["[fname]"],
      lastName: req.body["[lname]"],
      department: req.body["[dept]"],
      startDate: req.body["[date]"],
      jobTitle: req.body["[title]"],
      salary: req.body["[salary]"]
    }, function() {
      successCB();
    });

  } else {
    res.render('index', { 
      title: 'Home Page',
      message : msg
    });
  }   


};