// module.exports = function(x, y) {
  // return x * y;
// }

// muito parecido com Default, estamos exportando so uma coisa
// e em App colocamos o nome que quizer

// exportando numero
// module.exports = 4;

// exportando uma classe
module.exports = class Animal {
  constructor( nome ){
    this.nome = nome;
  }

  latir(){
    return ` O ${this.nome} esta latindo`;
  }
}
