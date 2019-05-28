'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var eventoSchema = schema({
    nombreEvento: String,
    fechaInicio: String,
    fechaFin: String,
    horaInicio: String,
    horaFin: String
});

module.exports = mongoose.model('Evento',eventoSchema);
