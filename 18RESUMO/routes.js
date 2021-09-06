const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');

route.get('/', homeController.pageInitial);
route.post('/', homeController.meuPost)

module.exports = route;

// exemplo de middlw
// function meuMiddleware(req, res, next) {
//   req.session = { nome: 'Lailton', sobrenome: 'Xavier'};
//   console.log();
//   console.log('Passei no middleware');
//   console.log();
//   next();
//   // precisa-se do next() para proseguir para outra função

//   // session seria algo relacionado a gaurda alguma informação no banco
//     // e pode ser passado para todos os middles func
// }

// route.get('/', meuMiddleware, homeController.pageInitial, function(req, res, next) {
//   console.log('Meu terceiro Mid');
//   console.log(`'terceiro middle' Olha o que rem no sesion.req.nome ${req.session.nome}`);

// } );

// se n tivesse o next(), ele n iria para homeController