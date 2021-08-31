const nome = 'Lailton';
const sobrenome = 'Xavier'

const falaNome = () => nome +' '+ sobrenome

// podemos fazer dessa forma ou de outra logao abaixo
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// chave pode ser diferente
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'tambem funciona';

// console.log(module.exports);

// podemos ter Classes
class Pessoa {
  constructor( nome ){
    this.nome = nome;
  }
}

// exports.Pessoa = Pessoa;

// podemos criar um exports tbm
module.exports = {
  nome, sobrenome, Pessoa
}
