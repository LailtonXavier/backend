const fs = require('fs').promises;

module.exports = ( caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'});
}
// escrever: arquivo, o conteudo, flag 'w' vai apagar tudo do arquivo se tiver
// e escreve o que estamos pedidndo
// encode é pra vc colocar outro se quiser, pq por padrao ja é utf8
// w = subscrever,  a = append

