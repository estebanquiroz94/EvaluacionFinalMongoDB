'use strict'

var Usuario = require('../modelos/usuarios');

function validarIngreso(req, res){
    let user = req.query.user;
    let pass = req.query.pass;
    var respuesta = "Denegado";
    console.log(req.query.user);

    Usuario.find({ email: user , password: pass  },function(err, usuario){

        if(err){
            console.log('Ocurrió un error');
            res.status(500).send({message:"Error en la petición."});
        }
        else{
            if(!usuario){
                res.status(404).send({message:"El usuario no existe."});
            }
            else{
              if(usuario.length>0){
                respuesta = "validado";
              }
                res.status(200).send(respuesta);
            }
        }
    }).count();
}

module.exports = {
    validarIngreso
}
