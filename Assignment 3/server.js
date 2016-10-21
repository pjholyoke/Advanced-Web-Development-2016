var http = require('http');
var url = require('url');
var fileSystem = require('fs');


http.createServer(function (request, response) {
  // Get pathname and remove leading /
  var pathName = url.parse(request.url).pathname;
  var route = pathName.substr(1);
  
  /* 
    Check to see if route matches todo, or index.
    If it does, try to get todo.json, or index.html respectively.
  */
  switch(route) {
      case "todo":
      fileSystem.readFile(__dirname+'/todo.json' , function (err, data) {
        if (err) 
            return console.error("ERROR (todo): " + err);
        else {
          response.writeHead(200, {
              "Content-Type": 'application/json'
          });

          response.write(data);
          response.end();
        }
      });
      break;
  case "index":
      fileSystem.readFile(__dirname+'/index.html' , function(err, data) {
        if(err)
          return console.log("ERROR (index): " + err);
        else {
          response.writeHead(200, {
              "Content-Type": 'text/html'
          });

          response.write("<a href='http://localhost:3000'>Go back</a><hr />");
          response.write(data);
          response.end();
        }
      });
      break;
  case "main.js":
      fileSystem.readFile(__dirname+'/main.js' , function(err, data) {
        if(err)
          return console.log("ERROR (main.js): " + err);
        else {
          response.writeHead(200, {
              "Content-Type": 'text/javascript'
          });
          
          response.write(data);
          response.end();
        }
      });
      break;
  default:
      // Otherwise 404.
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write(`
      <h1>404: Page not found.</h1>
      <hr />
      <ul>
        <li><a href="/index">Index page</a></li>
        <li><a href="/todo">Todo page</a></li>
      `);
      break;
  }
})
.listen(3000);
console.log("Listening on port 3000");
