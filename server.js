var http = require('http');
var express = require('./config/express');

var app = express();

/* http.createServer(
   function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Este é um servidor WEB escrito em Node.js');
   }
).listen(3000, '127.0.0.1'); */

http.createServer(app).listen(3000, '127.0.0.1');