const Router = require('express').Router();
var express = require('express');
var Evento = require('./modelos/evento');
var Usuario = require('./modelos/usuarios');
var body_parser = require('body-parser');


Router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


Router.post('/login', function(req, res){
  console.log(req.body)

  let user = req.body.user;
  let pas = req.body.pas;
console.log('despues de variables');
console.log('Antes de findOne');
      Usuario.find({nombre : 'kkk'},function(err,evento){
          if(err){
              console.log(err);
              res.status(500).send("Error en la petición.");
          }
          else{
              if(!evento){
                  console.log('No existe ni forro');
                  res.status(404).send("La marca no existe.");
              }
              else{
                  console.log('muerto por el culo');
                  res.status(200).send("retorna el evento");
              }
          }
      });
  //res.status(200).send("Validado");
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
