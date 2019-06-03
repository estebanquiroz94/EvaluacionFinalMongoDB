'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var eventoSchema = schema({
    title: String,
    start: String,
    start_hour: String,
    end: String,
    end_hour: String
});

module.exports = mongoose.model('Evento', eventoSchema);
