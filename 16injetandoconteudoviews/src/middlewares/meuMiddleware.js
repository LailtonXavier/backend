exports.middlewareGlobal = (req, res, next) => {
  // injetar conteudos em todas as aulas
  // exibi da msm forma na pagina Ejs
  res.locals.umValorLocal = 'Este e o meu valor local'
  next();
}