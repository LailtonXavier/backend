// raramente vamos usar dessa maneira, mas funciona
// isso tudo iria para Model dentro de uma classe

// const HomeModel = require('../models/HomeModel');
// busacar
// HomeModel.find()
// .then(dados => console.log(dados))
// .catch(e => console.log(e));

// HomeModel.create({
//   titulo: 'Outra titulo de teste',
//   descricao: 'Outra descricao de testes'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e))

exports.pageInitial = (req, res) => {
  res.render('index');
  return;
}

exports.meuPost = (req, res) => {
  res.send(req.body);
  return;
}
// exports.pageInitial = (req, res, next) => {
//   res.render('index');
//   // return;
//   // ele corta a requisição depois que carregado
//   console.log(`'pageInitial' Olha o que rem no sesion.req.nome ${req.session.nome}`);
//   next();
// }
// render('indes'); ele vai pegar nosso html
// next = seria o proximo middleware ou função a ser executado
