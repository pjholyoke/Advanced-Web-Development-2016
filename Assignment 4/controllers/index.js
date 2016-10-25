var lipsum;
var requestify = require('requestify');

// Gets lorem ipsum text from api I found.
module.exports.index = function(req, res){
  // Render a view.
  requestify.get('http://loripsum.net/api/1')
    .then(function(response) {
      res.render('index', {
        // Object to pass to view.
        title: "Index Page",
        lipsum: response.getBody()
      });
    }
  );
};