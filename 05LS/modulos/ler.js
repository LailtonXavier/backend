const fs = require('fs').promises;
// vai retorna uma promises

module.exports = (caminho) => fs.readFile(caminho, 'utf8');
// uma func quecebe um caminho e ja formatada para ler utf8