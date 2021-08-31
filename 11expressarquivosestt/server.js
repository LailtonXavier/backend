const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

// app.use(express.static('./public'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// esamos falando onde esta nossa view com caminho absoluto
// definindo uma engine para gente pode usar for, if, dentro do html

app.listen(3001, () => {
  console.log('server started in port http://localhost:3001');
})