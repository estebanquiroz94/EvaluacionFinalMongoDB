'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.port || 3701;

mongoose.connect('mongodb://localhost:27017/EvaluaciónFinal',(err, res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Conexión a mongo correcta.");
        app.listen(port, function(){
            console.log(`API agenda se está ejecutando en http://localhost:${port}`);
        });
    }
});
