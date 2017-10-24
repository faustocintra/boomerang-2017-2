
module.exports = function(app) {

   var controller = {};

   var Recurso = app.models.Recurso;

   controller.listar = function(req, res) {
   
      Recurso.find().populate('categoria').exec().then(
         function(recursos) {       // Callback se der certo
            res.json(recursos);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idRecurso = req.params.id;

      Recurso.findById(idRecurso).then(
         function(recurso) {
            res.json(recurso);
         },
         function(erro) {
            console.error(erro);
            res.status(404).send('Recurso não encontrado');   
         }
      );

   }

   controller.excluir = function(req, res) {

      var idRecurso = req.params.id;

      Recurso.remove({_id: idRecurso}).exec().then(
         function() {
            // HTTP 204: OK, sem conteúdo
            res.status(204).end();
         },
         function(erro) {
            console.error(erro);
         }
      );

   }

   // Inserção de um novo recurso
   controller.novo = function(req, res) {

      Recurso.create(req.body).then(
         function(recurso) {
            res.status(201).json(recurso);
         },
         function(erro) {
            console.error(erro);
            res.status(500).json(erro);
         }
      );

   }

   controller.atualizar = function(req, res) {

      console.log(req.body);

      var idRecurso = req.body._id;

      Recurso.findByIdAndUpdate(idRecurso, req.body).then(
         function (recurso) {
            res.status(200).json(recurso);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Recurso não encontrado para atualizar');
         }
      );

   }

   return controller;

}