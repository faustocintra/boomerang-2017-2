var passport = require('passport');
var mongoose = require('mongoose');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; /* mudou */

module.exports = function() {

   var Usuario = mongoose.model('Usuario');

   var strategy = new GoogleStrategy({
      clientID: '901303136919-67q7q41qrfnjt6u4um4ddqdb7cbsdv9p.apps.googleusercontent.com',
      clientSecret: 'Lggfetck6T3ga2cpJ9xF3oQq',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: 'profile email' /* acrescentado */
   },
      function (accessToken, refreshToken, profile, done) {
         
         var userEmail = '@';

         // Pega o primeiro email retornado, caso exista
         if(profile.emails && profile.emails.length > 0) {
            userEmail = profile.emails[0].value;
         }

         console.log('Email -------------------------> ' + userEmail);

         Usuario.findOrCreate(
            {login: profile.id},
            {nome: profile.displayName},
            function(erro, usuario) {
               if(erro) {
                  console.log(erro);
                  return done(erro);
               }
               usuario.email = userEmail;
               usuario.save();
               return done(null /* sem erros */, usuario);
            }
         );

      }
   );

   passport.use(strategy);

   // Serializa no cookie apenas o _id do usuário
   passport.serializeUser(function(usuario, pronto) {
      pronto(null, usuario._id);
   });

   // Desserializa o _id do usuário a partir do cookie
   passport.deserializeUser(function(id, pronto) {
      Usuario.findById(id).exec().then(
         function(usuario) {
            pronto(null, usuario);
         }
      )
   });


}