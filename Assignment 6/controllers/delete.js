var employeeSchema = require("../models/employee");

module.exports.index = function(req, res) {
  var id = req.params.id;
  
  employeeSchema.findByIdAndRemove(id, function() {
    res.render('deleted', {
      title: "Employee Sacked",
      id: id
    });
  }); 
}