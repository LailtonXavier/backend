require('dotenv').config();
// pegando nosso .env

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.emit('pronto');
  // emitindo um sinal e pegando la embaixo
  // promisses
})
.catch(e => console.log(e + 'renderizar algo'))
// ele primeiro deve conectar na base de dados e depois escutar
// depois q a base esta conectada vc escutar portas
// conectar com a chave do banco passadno a senha e o nome db

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/meuMiddleware');

app.use(express.urlencoded({ extended: true }));

// nossos proprios middlewares
app.use(middlewareGlobal);
app.use(routes);

// app.use(express.static('./public'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// esamos falando onde esta nossa view com caminho absoluto
// definindo uma engine para gente pode usar for, if, dentro do html

app.on('pronto', () => {
  app.listen(3001, () => {
  console.log('server started in port http://localhost:3001');
  })
})
// ele ta conentando com o banco e depois escutando
