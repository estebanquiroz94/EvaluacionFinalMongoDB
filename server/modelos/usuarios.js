'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var usuariosSchema = schema({
    email: String,
    nombre: String,
    password: String,
    fechaNacimiento: String
});

module.exports = mongoose.model('users',usuariosSchema);
