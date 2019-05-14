const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'EvaluaciónFinal';

//Importación de archivo con funcionalidad
var Operaciones = require('./create_users.js');

//Establece la conexión a BD
MongoClient.connect(url, function(err, client){
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("Coneccion establecida con la BD");
  }
  //Instancia nombre de BD
  const db = client.db(dbName);

  let coleccion = db.collection("users")

  coleccion.insertMany([
    {email: "jquiroz@gmail.com", nombre:"Juan Camilo", password: "juanchito25", fechaNacimiento:"2000/07/15"},
    {email: "valeria@gmail.com", nombre:"Valeria Lopez", password: "vale123", fechaNacimiento:"1994/07/20"},
    {email: "ddaniela@gmail.com", nombre:"Daniela Diaz", password: "danidani", fechaNacimiento:"1989/07/15"},
  ], (error, result) => {
    console.log("Resultado de insert: "+ result.toString())
  });

  // Inserta registros
  /*Operaciones.insertarRegistro(db, (error, result)=> {
    if(error){
      console.log("Error insertando los registros: "+error);
    }
  });*/

 //Elimina registros
  /*Operaciones.eliminarRegistro(db, (error, client)=>{
    if(error){console.log("Error eliminando esta mierda: "+error)}
  })*/

  /*Operaciones.consultarYActualizar(db, (error, result)=> {
    if(error){console.log("Error ACTUALIZANDO los registros: "+error);}
  });*/
});
