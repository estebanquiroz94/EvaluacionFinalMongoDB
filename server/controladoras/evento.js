'use strict'

var Evento = require('../modelos/evento');

function consultarEventos(req, res){
console.log(req.query.user);
    Evento.find({ user:  req.query.user},function(err,eventos){

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
          res.status(200).send(
            {
              mensaje: "Evento guardado con éxito",
              id:evento._id
            });
      }
  }
});
}

function actualizarEvento(req, res){

   Evento.updateOne({_id: req.body.id},
     {
       start: req.body.start,
       start_hour: req.body.start_hour,
       end: req.body.end,
       end_hour: req.body.end_hour
     },
     function(err, affected, response){
      if(err){
        res.status(500).send({message:"Error en la petición."});
      }
      else{
        res.status(200).send({message:"Evento actualizado correctamente"});
      }
   });
}
function eliminarEvento(req, res){

   Evento.findByIdAndRemove({_id: req.query.idEvent}, (err) =>{

      if(err){
        res.status(500).send({message:"Error en la petición."});
      }
      else{

        res.status(200).send({mensaje: 'Evento eliminado correctamente'});
      }
   });
}
module.exports = {
    consultarEventos,
    guardarEvento,
    actualizarEvento,
    eliminarEvento
}
