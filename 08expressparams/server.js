const express = require('express');
const app = express();

// qunando alguem postar alguma coisa trata o body pra express.
// .use() pra ele usar
app.use(express.urlencoded({ extended: true}));

// params
// http://facebook.com/profile/23432?campanha=googleads&nome_campanha=seila
// veja que params vem logo apos a url do site

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome do cliente: <input type="text" name="nome">
      <button> Enviar </button>
      </form>
  `);
});

// colocando params
// ?  =  vai servir para que o params seja opcional
  // se n tiver a '?' vai da erro na rota
// query string = ?nome=Lailton&sobrenome=Xavier&idade=21
app.get('/teste/:idUsuario?/:nomeUsuario?',(req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.idade);
})

// 
app.post('/',(req, res) => {
  console.log(req.body);
  res.send(`O que vc me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log('started in port http://localhost:3000');
})