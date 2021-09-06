require('dotenv').config();     // referente a nossa variaveis de ambiente
const express = require('express');  // iniciamos o express
const app = express();               //

const mongoose = require('mongoose'); // Mongoose é quem vai modelar nossa base de dados  
mongoose.connect(process.env.CONNECTIONSTRING,
   { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.emit('pronto');
  // emitindo um sinal e pegando la embaixo
  // promisses
})
.catch(e => console.log(e + 'renderizar algo'))
// ele primeiro deve conectar na base de dados e depois escutar
// depois q a base esta conectada vc escutar portas
// conectar com a chave do banco passadno a senha e o nome db

// connect session
const session = require('express-session'); // responsavel por salvar os koock do cliente na db
const MongoStore = require('connect-mongo');// vão ser salvas no banco de dados
const flash = require('connect-flash');     // mensagens auto-destrutivas, assim q ler ela desaparece

const routes = require('./routes');         // são as rotas da app
const path = require('path');
// pegar nosso helmet e o csurf
const helmet = require('helmet');           // ele cria um t okem a vadaa  form, , faz 
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/meuMiddleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true })); // postar form pra dentro da aplixação
app.use(express.json());  // é muito utilizado

// app.use(express.static('./public'));
app.use(express.static(path.resolve(__dirname, 'public'))); // são arquivos que podem ser acessado diretamente

// configurar as sessões
const sessionOptions = session({
  secret: 'qualquersenha asdfasd askfjsldf askdfjsd()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // arq que renderizam na tela
app.set('view engine', 'ejs');
// esamos falando onde esta nossa view com caminho absoluto
// definindo uma engine para gente pode usar for, if, dentro do html

// so de ter feito isso ja prevenimos o atack
app.use(csrf());
// nossos proprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3001, () => {
  console.log('server started in port http://localhost:3001');
  })
})
// ele ta conentando com o banco e depois escutando
