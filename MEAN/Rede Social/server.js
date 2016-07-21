"use strict";

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db'); //define onde configs do banco ficam
var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.use(bodyParser.json()); //json parser
app.use(bodyParser.json({ type: 'application/vnd.api+json'})); //faz parse de 'application/vnd.api+json' como json
app.use(bodyParser.urlencoded({ extended: true })); //adicionar qs para tratar listas, arrays...
app.use(methodOverride('X-HTTP-Method-Override')); //adicionar delete e put ao server
app.use(express.static(__dirname + '/public')); //define caminho de arquivos estaticos

require('./app/routes')(app); //adicionar arquivo de rotas ao servidor

app.listen(8080);
console.log('Server running on ' + port);
exports = module.exports = app; 