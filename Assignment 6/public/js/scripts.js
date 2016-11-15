$(function() {
  var temp = [];
  
  $('#date').datepicker({
    dateFormat: "yy-mm-dd"
  });
  
  $('button.close').on('click', function() {
    //console.log($(this)[0].parentElement);
    $($(this)[0].parentElement).fadeOut(250);
  });
  
  $('#newEmployee').on('submit', function(e) {
    e.preventDefault();
    var data = $('#newEmployee').serializeArray();
    console.log("DATA:");
    console.log(data);
    
    var err = 0;
    $.each(data, function(k, v) {
      if(this.value === "")
        err = 1;
      
      temp[this.name] = v.value;
      console.log("ADDED");
    });
    console.log(temp);
    
    switch(err) {
      case 0:
        $.post("/", { '':$.extend({}, temp) }, function() {
          $('.error').fadeOut(250, function() {
            $('.success').fadeIn(250);
            $('#newEmployee')[0].reset();        
          });
        });
        break;
      case 1:
        $('.error').fadeIn(250);
        return;
        break;
    }
  });
  
  // UPDATE
  $('#updateEmployee').on('submit', function(e) {
    e.preventDefault();
    var data = $('#updateEmployee').serializeArray();
    console.log("DATA:");
    console.log(data);
    
    var err = 0;
    $.each(data, function(k, v) {
      if(this.value === "")
        err = 1;
      
      temp[this.name] = v.value;
      console.log("UPDATED");
    });
    console.log(temp);
    
    switch(err) {
      case 0:
        $.post(window.location.pathname, { '':$.extend({}, temp) }, function() {
          $('.error').fadeOut(250, function() {
            $('.success').fadeIn(250);
            $('#updateEmployee')[0].reset();        
          });
        });
        break;
      case 1:
        $('.error').fadeIn(250);
        return;
        break;
    }
  });
  
  $('#newEmployee #cancel').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#newEmployee')[0].reset();
  });
  
  $('#updateEmployee #cancel').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#updateEmployee')[0].reset();
  });
  
});