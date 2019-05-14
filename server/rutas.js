const Router = require('express').Router();

Router.post('/login', function(req, res){
  console.log('Llego algo');
  console.log(req.body)

  //let user = req.body.user
  //let pas = req.body.pas

  res.send({ hello: 'world' });
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
