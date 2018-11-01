// DEPENDENCIES
// neccessary npm packages
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server

// Tells node to create an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/public/"));
// OR
// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });