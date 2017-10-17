
module.exports = function(app) {

   var controller = {};

   var Recurso = app.models.Recurso;

   controller.listar = function(req, res) {
   
      Recurso.find().exec().then(
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

      var recurso = recursos.filter(function(recurso){
         return recurso._id == idRecurso;
      });

      if(recurso[0]) {
         // Retorna o primeiro elemento do vetor filtrado
         res.json(recurso[0]);
      }
      else{
         res.status(404).send('Recurso não encontrado');
      }

   }

   controller.excluir = function(req, res) {

      var idRecurso = req.params.id;

      // Filtra o vetor 'recursos', gerando o vetor
      // 'remanescentes' com todos os registros, exceto
      // o que tiver sido excluído
      var remanescentes = recursos.filter(function(rec) {
         return rec._id != idRecurso;
      });

      // Se houve exclusão, o tamanho do vetor 'remanescentes'
      // será menor do que o do vetor 'recursos'
      if(remanescentes.length < recursos.length) {
         recursos = remanescentes;
         res.status(200).send('Recurso excluído');
      }
      else {
         res.status(404).send('Recurso para exclusão não encontrado');
      }

   }

   // Inserção de um novo recurso
   controller.novo = function(req, res) {
      console.log(req.body);
      
      Recurso.create(req.body).then(
         function(recurso) {
            res.status(201).json(recurso);
         },
         function(erro) {
            console.error(erro);
            res.status(500).json(erro);
         }
      )

   }

   return controller;

}