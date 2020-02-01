var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var PORT = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Import routes and give the server access to them.
console.log(require("./app/routing/apiRoutes")(app));
console.log(require("./app/routing/htmlRoutes")(app));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
