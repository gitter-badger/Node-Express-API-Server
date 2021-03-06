

/*
	First we pass in path from Node.js. This will turn our. hello!!!! 
*/
var path = require("path"),
	express = require("express");

module.exports = function(serverApp) {

	serverApp.use("/api/heroes", require("./api/heroes"))


/*
	The static route used below will be used to deliver page dependencies such as CSS and Javascript files.	
*/

	serverApp.use("/static", express.static("./staticpages/dependencies/"))

	serverApp.route('/addahero')
    .get(function(req, res) {
      res.sendFile(path.resolve('./staticpages/addahero.html'));
  })

    serverApp.route('/addaherotest')
    .get(function(req, res) {
      res.sendFile(path.resolve('./staticpages/requesttest.html'));
  })
	

/*
	Any other route used other than what we specifically define will default to	our 404 page.
*/
	serverApp.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve('./staticpages/404.html'));



    });
}