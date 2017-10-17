module.exports = function(app) {

   var controller = {};

   var Categoria = app.models.Categoria;

   controller.listar = function(req, res) {
   
      Categoria.find().exec().then(
         function(categorias) {       // Callback se der certo
            res.json(categorias);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idCategoria = req.params.id;

      var categoria = categorias.filter(function(categoria){
         return categoria._id == idCategoria;
      });

      if(categoria[0]) {
         // Retorna o primeiro elemento do vetor filtrado
         res.json(categoria[0]);
      }
      else{
         res.status(404).send('Categoria não encontrado');
      }

   }

   controller.excluir = function(req, res) {

      var idCategoria = req.params.id;

      // Filtra o vetor 'categorias', gerando o vetor
      // 'remanescentes' com todos os registros, exceto
      // o que tiver sido excluído
      var remanescentes = categorias.filter(function(rec) {
         return rec._id != idCategoria;
      });

      // Se houve exclusão, o tamanho do vetor 'remanescentes'
      // será menor do que o do vetor 'categorias'
      if(remanescentes.length < categorias.length) {
         categorias = remanescentes;
         res.status(200).send('Categoria excluído');
      }
      else {
         res.status(404).send('Categoria para exclusão não encontrado');
      }

   }

   return controller;

}