var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function () {

   var schema = mongoose.Schema({
      login: {
         type: String,
         required: true
      },
      nome: {
         type: String,
         required: true
      },
      email: {
         type: String
      },
      dataInclusao: {
         type: Date,
         default: Date.now // Preenchimento automático com a data/hora atual
      }
   });

   schema.plugin(findOrCreate);
   return mongoose.model('Usuario', schema);

}