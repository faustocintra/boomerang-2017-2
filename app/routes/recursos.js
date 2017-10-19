//var Controller = require('../controllers/recursos');

//var controller = Controller();

module.exports = function(app) {
   
   var controller = app.controllers.recursos;
   
   app.get('/recursos', controller.listar);
   app.get('/recursos/:id', controller.obterUm);
   app.delete('/recursos/:id', controller.excluir);
   app.put('/recursos', controller.novo);
   app.post('/recursos/', controller.atualizar);
}