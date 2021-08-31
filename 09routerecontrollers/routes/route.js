const express = require('express');
const route = express.Router();

const homeController = require('../controllers/homeController');
const contactController = require('../controllers/contactController');

// ele so faz o roteamento
// as funções é trabalho do controlador (controller)
// Rotas home
route.get('/', homeController.pageInitial );
route.post('/', homeController.datasRecebido );

// Rotas contatos
route.get('/contact', contactController.pageInitial);

module.exports = route;
