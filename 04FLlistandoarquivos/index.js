const fs = require('fs').promises;
const path = require('path');

//  tem dois tipos de função: 
// readdir = função asincrona
// readdirSync = função sincrona = ela so vai parar ate quando executar tudo

// fs.readdir(path.resolve(__dirname))
// .then(files => console.log(files))
// .catch(e => console.log(e))

// fazer de outra forma
// mostra as paginas e seus diretorios 
// se for diretorio liste ela
async function readdir(rootDir){
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir)
  walk(files, rootDir);
}

async function walk(files, rootDir){
  for (let file of files ){
    const fileFullPath  = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    // expressão regular remover
    if (/\.git/g.test(fileFullPath))  continue;
    if(/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
      // ele vai entrar nos diretorio e abrir chamando o lop outra vez
    }

    if(
      // mostra so html
      !/\.html$/g.test(fileFullPath)
    ) continue;

    console.log(file, stats.isDirectory());

  }

}

readdir('/Lailton');
