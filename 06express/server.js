const express = require('express');
const app = express();

// http://mersite.com/minharota <= GET -> entregue a pagina

app.get('/', (req, res) => {
    // req = oq estou pedingo, res = oq vou mandar pro servidor
    res.send('Hello wordl!');
});

app.get('/contato', (req, res) => {
    res.send('Entre em contato!');
});

app.post('/', (req, res) => {
    res.send('Recebi');
})

// ficar ouvindo, se liga nas portas 
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
    
});