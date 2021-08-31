// const muliplicacao = require('./mod2');
// const numero = require('./mod2');
const oAnimal = require('./mod2');

const p1 = new oAnimal('Cachorrao');

// console.log(muliplicacao(2,2));
// console.log(numero);
// console.log(p1.latir());

// console.log(__filename); // nome do arquivo atul
// console.log(__dirname); // é nome da past atual

// para manipular caminhos usamos o path
// path um modulo que ja tem no node
// se n sabemos o projeto vai rodar, windos, linux, etc 
const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '. ' , '.', 'front-end'));
