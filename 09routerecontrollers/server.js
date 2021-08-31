const express = require('express');
const app = express();
const routes = require('./routes/route');


app.use(express.urlencoded({ extended: true }));
app.use(routes);
// express usa minhas rotas

app.listen(3000, () => {
  console.log('server started in port http://localhost:3000');
})