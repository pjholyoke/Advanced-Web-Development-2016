//res.users[i]["name"]["first"] + res.users[i]["name"]["last"]

(function() {
  // Get users, then populate nav.
  getData('data/users.json').then(function(res) {
    for(i = 0; i < res.users.length; i++) {
      var li = document.createElement("li");

      li.innerHTML = res.users[i]["name"]["first"] + ' ' + res.users[i]["name"]["last"];
      li.setAttribute("user-id", res.users[i]._id);
      li.addEventListener("click", function(e) {
        
        getUserByID(e.target.getAttribute("user-id")).then(function(res) {
          // Clear h3
          document.querySelector("h3").innerHTML = "";
          document.querySelector("figure").innerHTML = "";
          document.querySelector("article").innerHTML = "";
          
          // Create, then image into figure.
          var img = document.createElement("img");
          img.setAttribute("src", "img/"+res["picture"]);
          document.querySelector("figure").appendChild(img);
          
          // Names of attributes.
          var attributes = [
            "Full Name",
            "company",
            "email",
            "phone",
            "address",
            "registered",
            "age",
            "eyeColor",
            "greeting",
            "favoriteFruit",
            "balance",
            "about"
          ];
          
          // Loop through them, and append them to .featured, also capitalize first and last name.
          for(i = 0; i < attributes.length; i++)
          {
            var p = document.createElement("p");
            var title = attributes[i].charAt(0).toUpperCase() + attributes[i].slice(1);
            
            var txt = (attributes[i] === "Full Name") ? 
                document.createTextNode(title+": "+res["name"]["first"]+' '+res["name"]["last"]) : 
                document.createTextNode(title+": "+res[attributes[i]]);
            
            if(res["isActive"])
              document.querySelector('article').setAttribute("class", "active");
            else
              document.querySelector('article').setAttribute("class", "inactive");
            
            p.appendChild(txt);
            document.querySelector('article').appendChild(p);
          } 
        })
        .catch(function(err) {
           alert("Couldn't get user data. ("+err+")");
        });
      });
      
      document.querySelector('.users').appendChild(li);
    }
  })
  .catch(function(err) {
    alert("Couldn't get users. ("+err+")");
  });
})();


function getData(filename) { 
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filename);
    xhr.onload = function() {
      if (xhr.status === 200) 
        resolve(JSON.parse(xhr.responseText));
      else 
        reject('Error: ' + xhr.status);
    };
    xhr.send();
  });
}

function getUserByID(userid) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "data/"+userid+".json");
    xhr.onload = function() {
      if (xhr.status === 200) 
        resolve(JSON.parse(xhr.responseText));
      else 
        reject('Error: ' + xhr.status);
    };
    xhr.send();
  });
}




