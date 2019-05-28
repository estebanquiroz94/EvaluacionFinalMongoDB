'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas
var marca_routes = require('./routes/marca');
var marcaRef_routes = require('./routes/marca_referencia');
var usuario_routes = require('./routes/usuario');
var pase_routes = require('./routes/pase');
var vehiculo_routes = require('./routes/vehiculo');
var alquiler_routes = require('./routes/alquiler');*/

//configuracion de cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//rutas base
/*app.use('/api', marca_routes);
app.use('/api', marcaRef_routes);
app.use('/api', usuario_routes);
app.use('/api', pase_routes);
app.use('/api', vehiculo_routes);
app.use('/api', alquiler_routes);*/

module.exports = app;
