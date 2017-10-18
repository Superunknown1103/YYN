// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
console.log('server started');
var path = require("path");
mongoose.Promise = Promise;
// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 8000

// Requiring our models for syncing
const Product = require("./models/post.js")

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db = mongoose.createConnection('mongodb://heroku_wf71g691:hutlbasglpvqvida0inrff4ngu@ds121955.mlab.com:21955/heroku_wf71g691');
db.on("error", function(error){
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful");
});

app.listen(port, function() {
  console.log("App is running on port " + port);
});