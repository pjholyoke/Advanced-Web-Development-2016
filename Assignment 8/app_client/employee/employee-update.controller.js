(function() {

  'use strict';
  angular
    .module('app.employee')
    .controller('EmployeeUpdateController', EmployeeUpdateController);

  EmployeeUpdateController.$inject = ['EmployeeService', '$routeParams'];

  function EmployeeUpdateController(EmployeeService, $routeParams) {
    var vm = this;

    vm.data = {
      'fname'   : '',
      'lname'   : '',
      'dept'    : '',
      'date'    : '',
      'title'   : '',
      'salary'  : ''
    };
    vm.submit = submit;
    vm.message = '';
    vm.title = 'Update Employee Record';

    var _id = $routeParams.id;

    activate();

    ////////////

    function activate() {
      getEmployee();
    }   
    /* we can use the same form as the add-controller by updating the data model
     * so it will display on the form as an update form
     */
    function getEmployee() {
      EmployeeService.getEmployee(_id)
        .then(function(data) {
        
        console.log(data);
        
        vm.data.fname = data.firstName; 
        vm.data.lname = data.lastName;
        vm.data.dept = data.department;
        vm.data.date = data.startDate.substr(0, 10);
        vm.data.title = data.jobTitle;
        vm.data.salary = data.salary;
      });
    }
 
    function submit() {
      EmployeeService.updateEmployee(_id, vm.data)
        .then(function(data) {
        vm.message = data;
      });
    }
  }

})();

