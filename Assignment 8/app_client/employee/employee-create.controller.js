(function() {

  'use strict';
  angular
    .module('app.employee')
    .controller('EmployeeCreateController', EmployeeCreateController);

  EmployeeCreateController.$inject = ['EmployeeService'];

  function EmployeeCreateController(EmployeeService) {
    var vm = this;

    vm.data = {
      'fname' : '',
      'lname' : '',
      'dept' : '',
      'date' : '',
      'title' : '',
      'salary' : ''
    };
    vm.submit = submit;
    vm.message = 'Add New Employee';
    vm.title = 'Add New Employee';

    activate();

    ////////////

    function activate() {}   

    function submit() {
      EmployeeService.addEmployee(vm.data)
        .then(function(data) {
        vm.message = data;
      });
    }
  }
})();