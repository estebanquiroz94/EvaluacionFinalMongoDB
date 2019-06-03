'use strict'

var express = require('express');
var eventoController = require('../controladoras/evento.js');
var api = express.Router();

api.get('/Eventos/', eventoController.consultarEventos);
api.post('/Eventos/', eventoController.guardarEvento);

module.exports = api;
