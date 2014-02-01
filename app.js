var express = require('express')
, http = require('http')
, nib = require('nib')
, stylus = require('stylus')
, path = require('path')
, format = require('util').format
;

var app = express();

// modules

var startpage = require('./lib/start');

// use the module in the app
app.use(startpage);

app.use(express.favicon());
app.use(express.logger('dev'));

// all environments
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(app.router);

app.listen(3000);
console.log('Listening on port 3000');