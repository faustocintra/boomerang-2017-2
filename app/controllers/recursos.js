var recursos = [
   {
      '_id': 1,
      'descricao': 'Projetor 1',
      'tipo': 'Projetor'
   },
   {
      '_id': 2,
      'descricao': 'Laboratório 3',
      'tipo': 'Laboratório de computadores'
   },
   {
      '_id': 3,
      'descricao': 'Controle remoto ADS 2',
      'tipo': 'Controle remoto de TV'
   },
   {
      '_id': 4,
      'descricao': 'Laboratório 1',
      'tipo': 'Laboratório de computadores'
   }
];

module.exports = function() {

   var controller = {};

   controller.listar = function(req, res) {
      res.json(recursos);
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

   return controller;

}