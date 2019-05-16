'use strict';
const  http = require('http'),
      path = require('path'), //Resolver rutas de archivos extaticos
      Routing = require('./rutas.js'),
      express = require('express'), //Crear aplicacion sobre el servidor http
      bodyParser = require('body-parser'), // Interpretar tipos de datos que viajan en el cuerpo de las peticiones
      mongoose = require('mongoose') //Realizar conexion a BD

//Puerto
const PORT = 8082

//Conexión express
const app = express();

//Se crea el servidor a partir del modulo http
const Server = http.createServer(app);

//Aplicacion express utiliza el modulo bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Servir archivos estaticos sobre aplicacion express()
app.use(express.static('client'));

app.use('/users', Routing)

//Se ejecuta funcion linstener enviando el puerto y callback como argumentos
Server.listen(PORT, function(){
  console.log('El servidor se encuentra corriendo en el puerto indicado: '+PORT);
})
