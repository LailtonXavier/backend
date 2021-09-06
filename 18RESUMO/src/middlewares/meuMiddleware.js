exports.middlewareGlobal = (req, res, next) => {
  // injetar conteudos em todas as aulas
  // exibi da msm forma na pagina Ejs
  res.locals.umValorLocal = 'Este e o meu valor local'
  next();
}

// checando o erro
exports.checkCsrfError = (err, req, res, next) => {
  if( err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
}

// enviar para todas as paginas um CSRF token
// com isso é preciso criar um token agora em tds os forms
// para criar é so colocar o codigo em todos os forms
 exports.csrfMiddleware = (req, res, next) => {
   res.locals.csrfToken = req.csrfToken();
   next();
 }
