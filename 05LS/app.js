const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
// esta voltando uma pasta e colocando o nome do arquivo
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

// const pessoas = [
//     {nome: 'Joao'},
//     {nome: 'Maria'},
//     {nome: 'Jose'},
//     {nome: 'Dudah'}
// ];

// const json = JSON.stringify(pessoas, '', 2);
// // esse '2' é para identar

// escreve(caminhoArquivo, json);

// var ler um arquivo e retorna um obj
async function lerDados(caminho) {
    const dados = await ler(caminho);
    // return dados;
    // ou dessa forma ja renderizando os dados
    renderizaDados(dados);
}

// const dadosLidos = lerDados(caminhoArquivo)
    // .then( dados => console.log(dados));
    // dessa forma deu certo, ele ta retornando uma promises

    // pode ser tbm dessa forma
function renderizaDados(dados){
    // converte para obj
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
    // val.nome =   pegar so o nome
}
lerDados(caminhoArquivo);
