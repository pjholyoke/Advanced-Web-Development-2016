var Employee = require('../models/employee');

module.exports.index = function(req, res) {

  Employee.findById(req.params.id, function (err, data) {
    var d = new Date(data.startDate);
    var dstring = (d.getFullYear()+'-'+(d.getMonth()+1)+"-"+d.getDate());
    
    res.render('update', {               
      title: "Update User",
      id: req.params.id,
      userData: data,
      date: dstring
    });
  });
  
  if (req.method === 'POST') {
    
    console.log(req.body);
    console.log("TRYING TO UPDATE");
    Employee.findById(req.params.id, function (err, doc) {
      doc.firstName = req.body["[fname]"];
      doc.lastName = req.body["[lname]"];
      doc.department = req.body["[dept]"];
      doc.startDate = req.body["[date]"];
      doc.jobTitle = req.body["[title]"];
      doc.salary = req.body["[salary]"];
      doc.save();
    });
  }
}