// here are all file of configuration//
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//configuration of bodyparser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//files from routes

var routes_movie = require('./routes/routes_movie');

//Config Router

app.use('api/', routes_movie);



module.exports = app;