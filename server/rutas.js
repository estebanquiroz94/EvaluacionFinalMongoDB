const Router = require('express').Router();
var express = require('express');
var body_parser = require('body-parser');


Router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


Router.post('/login', function(req, res){
  console.log('Llego algo');
  console.log(req.body)

  let user = req.body.user;
  let pas = req.body.pas;

  

  res.status(200).send("Validado");
})
//Obtiene todos los usuarios

// Router.get('/all', function(req, res){
//
// })
//
// //Consultar usuario por id
// Router.get('/:id', function(req, res){
//
// })
//
// //Crear un usuario
// Router.post('/new', function(req, res){
//
// })
//
// //Eliminar usuario por id
// Router.post('/delete/:id', function(req, res){
//
// })
//
// //Inactivar usuario por id
// Router.post('/inactive/:id', function(req, res){
//
// })
//
// //Activar usuario por id
// Router.post('/active/:id', function(req, res){
//
// })

module.exports = Router;
