exports.pageInitial = (req, res) => {
  // req.flash('info', 'Ola mundo');
  // req.flash('error', 'Errors');
  // req.flash('success', 'Success suasmo');
  // console.log(req.flash('info'), req.flash('error'), req.flash('success'));

  // req.session.usuario = { nome: 'Lailton', logado: true };  
  // console.log(req.session.usuario);
  res.render('index');
  return;
}

exports.meuPost = (req, res) => {
  res.send(req.body);
  return;
}
