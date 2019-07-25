//requiring express and path 
var express = require("express");
var path = require("path");

//creating express server
var app = express();

//sets initial port 
var PORT = process.env.PORT || 3000;

//setting express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//server startup 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });