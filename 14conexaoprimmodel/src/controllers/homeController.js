
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
