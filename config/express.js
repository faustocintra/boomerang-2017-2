var express = require('express');
var load = require('express-load');

//var home = require('../app/routes/home');

module.exports = function() {
   var app = express();

   //app.use(express.static('./public'));

   app.set('port', 3000);
   app.set('ip', '127.0.0.1');

   app.set('view engine', 'ejs');
   app.set('views', './app/views');

   //home(app);

   /*
      Carrega todos os módulos de app/models,
      depois os módulos de app/controllers,
      e, por fim, os módulos de app/routes,
      "despejando" tudo na variável app
   */

   // cwd = change working directory
   load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes')
      .into(app);

   return app;
};