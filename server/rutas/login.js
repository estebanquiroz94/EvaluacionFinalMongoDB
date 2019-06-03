'use strict'

var express = require('express');
var loginController = require('../controladoras/login.js');
var api = express.Router();

api.get('/login/', loginController.validarIngreso);

module.exports = api;
