// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads homepage
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Home.js"));
  });
  // main route loads main.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/About.js"));
  });
  // about route loads about.html
  app.get("/orders", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Order.js"));
  });
  // contact route loads contact.html
  app.get("/send", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Send.js"));
  });
};
