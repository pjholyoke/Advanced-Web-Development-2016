
/* 
   Do an Http GET on /todo page,
   Loop through json structure after covnerting to JS Obj,
   Then Print it. 
 */
var xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:3000/todo");
xhr.onreadystatechange = function() {
  if (xhr.status === 200)  {
    var data = JSON.parse(xhr.responseText);
    for(var i = 0; i < data.length; i++)
      document.querySelector('.data').innerHTML += ("<p><strong>Title: </strong>"+data[i]["title"]+"</p>");
  }
  else
    console.log('Error on index: ' + xhr.status);
};
xhr.send();