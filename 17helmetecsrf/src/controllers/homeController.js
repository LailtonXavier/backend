exports.pageInitial = (req, res) => {
  
  res.render('index', {
    titulo: 'Lorem impsun',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  });
  return;
}

exports.meuPost = (req, res) => {
  res.send(req.body);
  return;
}
