## Segue os seguintes comandos utilitários:

Para gerar o código fonte das lambdas no diretório *src* escolhido

`` npm run infra:build:cdk``

Para alto formatar todo código typescript do projeto conforme mesmo padrão descrito pelo arquivo `.prettierrc`:

`` npm run infra:format:fix``

Para instalar dependencias e executar build das lambdas do projeto.

`` npm run source:setup``

Para executar o deploy da aplicação na conta padrão aws configurada em sua máquina basta executar:

`` npm run app:deploy``

Para executar o deploy da aplicação no seu ambiente Localstack configurado em sua máquina utilizando o `cdkLocal` basta executar:

`` npm run app:deploy:local``

