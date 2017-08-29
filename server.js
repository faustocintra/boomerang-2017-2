var http = require('http');
var express = require('./config/express');

var db = require('./config/database');

// Conecta-se ao MongoDB no início da aplicação.
// A conexão é feita no servidor localhost,
// para utilizar o banco de dados boomerang
db('mongodb://localhost/boomerang');

var app = express();

/* http.createServer(
   function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Este é um servidor WEB escrito em Node.js');
   }
).listen(3000, '127.0.0.1'); */

http.createServer(app).listen(
   app.get('port'), 
   app.get('ip'),
   function() {
      console.log('Express Server escutando na porta ' +
      app.get('port'));
   }
);