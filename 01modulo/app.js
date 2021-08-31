// const mod1 = require('./mod1');
// const falaNome = require('./mod1').falaNome;
// ou dessa forma
// const falaNomeOther = mod1.falaNome;

// ja que é um Objeto podemos usar DESTRUCTION
// const { nome, falaNome } = require('./mod1');

// console.log(mod1.falaNome());
// console.log(falaNome());
// console.log(falaNomeOther);
// console.log(nome);

// pegando a Classe Pessoa
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Lailton');
console.log(p1);
