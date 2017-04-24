
// modules ==============================================
var morgan = require('morgan');
var bodyParser = require('body-parser');

// export middleware

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlendcoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
}
