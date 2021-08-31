exports.pageInitial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
      Nome do cliente: <input type="text" name="nome">
      <button> Enviar </button>
      </form>
  `);
};

exports.datasRecebido = (req, res) => {
  res.send(`Ola <strong>${req.body.nome}</strong>, tudo bem!`);
};
