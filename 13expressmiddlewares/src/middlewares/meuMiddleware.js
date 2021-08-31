exports.middlewareGlobal = (req, res, next) => {
  if(req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Xavier', 'Não use esse nome');
    console.log();
    console.log(`Vi que vc postou ${req.body.cliente}`);
    console.log();

  }
  console.log('foi');
  next();
}