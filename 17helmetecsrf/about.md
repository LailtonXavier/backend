### express Helmet e CSRF (ver documentação)

  # helmet
    - mpm i helmet
    - esta relacionado a segurança, é so instalar e faz o resto
    - ele é mais simples, criar, import e usar

  # CSRF
    - ele vai criar nosso tokem que vms colocar nos forms
    - npm i csurf
    - vai prevenir que alguem invete algum conteudo no seu site, em seu
      nome
    - ele vai ter que criar uns Middleware
    - vms injetar dois tokens em todas as 
    
  ### IMPORTANTE (explicação do professor)
    O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema ainda em desenvolvimento, usando urls como "127.0.0.1", "localhost" ou até um servidor com IP externo, sem usar SSL (https), é recomendável desativá-lo. Ele pode bloquear importação de scripts e arquivos de CSS.

    Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) ou CSS, basta desativar o helmet para correção.

    Isso só ocorrerá em sistemas sem SSL (sem https na URL).
