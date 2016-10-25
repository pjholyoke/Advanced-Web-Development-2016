var requestify = require('requestify');

// Gets lorem ipsum text from api I found.
module.exports.index = function(req, res){
  // Render a view.
  requestify.get('http://loripsum.net/api/2')
    .then(function(response) {
      res.render('about', {
        // Object to pass to view.
        title: "About Page",
        lipsum: response.getBody()
      });
    }
  );
};