
quando instalado o express no packge.json tem a versão
  - dependencies: "express": "^4.17.1"  = esse ^ significa que pode atualizar a versão
  - se vc quer deixar versão fixa, coloca = npm i express -E

- Atualizar os pacotes  =  npm update

- devDependencies = é para qnd estamos desenvolvendo
    - para mover       = npm i express --save-dev

- dependecies         = seria pra produção
    - como podemos ir para produção = npm i express --save-prod

- mudar a versão    = npm i express@2.2.0
    - 2  1  0 = major, minor e patch  = patch seria tipo a correção de bug
      - ~ patch mexe aqui
      - para atualixar fica = npm i express@4.x
      - ou npm update para atualizar tudo
      - para desinstalar    =   npm uninstall express

      - ver a lista   =   npm ls
      - ver so oq instalou    =   npm ls --depth=0
      - ver com uma aprofd    =   npm ls --depth=1

      - ver pacotes desatualizados  = npm outdated


