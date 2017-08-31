var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      especificacoes: {
         type: String,
      },
      categoria: {
         type: mongoose.Schema.ObjectId,
         ref: 'Categoria',
         required: true
      },
      patrimonio: {
         type: Number
      }
   });

   return mongoose.model('Recurso', schema);

}