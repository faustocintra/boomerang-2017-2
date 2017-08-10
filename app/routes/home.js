var Controller = require('../controllers/home');

var controller = Controller();

module.exports = function(app) {
   app.get('/', controller.index);
}