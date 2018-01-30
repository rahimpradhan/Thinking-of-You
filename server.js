// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var PORT = process.env.PORT || 3001;

passport.use(new GithubStrategy({
        clientID: "bd872d238ba0dd0339d4",
        clientSecret: "2c93b1be2f81d55d4b9e77d5495f0ab46e2d7fe9",
        callbackURL: "http://localhost:30000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // placeholder for translating profile into your own custom user object.
        // for now we will just use the profile object returned by GitHub
        return done(null, profile);
    }
));

// Express and Passport Session
var session = require('express-session');
app.use(session({secret: "enter custom sessions secret here"}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    // placeholder for custom user serialization
    // null is for errors
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    // placeholder for custom user deserialization.
    // maybe you are getoing to get the user from mongo by id?
    // null is for errors
    done(null, user);
});

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/', function (req, res) {
    var html = "<ul>\
    <li><a href='/auth/github'>GitHub</a></li>\
    <li><a href='/logout'>logout</a></li>\
  </ul>";

    // dump the user for debugging
    if (req.isAuthenticated()) {
        html += "<p>authenticated as user:</p>"
        html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
    }

    res.send(html);
});

app.get('/logout', function(req, res){
    console.log('logging out');
    req.logout();
    res.redirect('/');
});

// Simple route middleware to ensure user is authenticated.
//  Use this route middleware on any resource that needs to be protected.  If
//  the request is authenticated (typically via a persistent login session),
//  the request will proceed.  Otherwise, the user will be redirected to the
//  login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}

app.get('/protected', ensureAuthenticated, function(req, res) {
    res.send("acess granted");
});



var server = app.listen(30000, function () {
    console.log('Example app listening at http://%s:%s',
        server.address().address, server.address().port);
});

// Requiring our models for syncing
var db = require("./models/index");

app.use(express.static(path.join(__dirname, 'client/build')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./routes/api/toyController')(app);
// If no API routes are hit, send the React app
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
