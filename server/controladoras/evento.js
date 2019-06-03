'use strict'

var Evento = require('../modelos/evento');

function consultarEventos(req, res){

    Evento.find({ email: req.query.email},function(err,eventos){

        if(err){
            res.status(500).send({message:"Error en la petición."});
        }
        else{
            if(!eventos){
                res.status(404).send({message:"El usuario no existe."});
            }
            else{

              console.log('Consulta Correcta');
                res.status(200).send(eventos);
            }
        }
    });
}

function guardarEvento(req, res){

console.log(req.body);

Evento.create(req.body, function (err, evento) {
  if(err){
      res.status(500).send({message:"Error en la petición."});
  }
  else{
      if(!evento){
          res.status(404).send({message:"No se pudo guardar el evento"});
      }
      else{

        console.log('Evento guardado con éxito');
          res.status(200).send(evento);
      }
  }
});
}

module.exports = {
    consultarEventos,
    guardarEvento
}
