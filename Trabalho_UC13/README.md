Catálogo de Animes API

O Catálogo de Animes API é uma API REST desenvolvida utilizando Node.js e Express.js.

funcionalidades:
- Listagem completa de animes;
- Busca de anime por ID;
- Filtros personalizados utilizando parâmetros de consulta;
- Retorno de informações em formato JSON.

Os dados são armazenados no arquivo `dados.json`, utilizado como uma base de dados local.

 Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- JSON
- CORS


Instalação e Execução

- Copiar a pasta do projeto

- Entrar na pasta do projeto
cd catalogo-api

- Instalar as dependências necessarias
no terminal digite cmd, enter e digite

npm install express cors

Esse comando instala todas as bibliotecas necessárias para o back-end e front-end "conversarem"

depois

- Iniciar o servidor
digite 

npm start

O comando irá executar node Index.js
Após iniciar, o servidor estará disponível em
http://localhost:3000

Rotas GET

Rota Inicial
GET /
Retorna informações básicas da API.
Exemplo 
http://localhost:3000/
Resposta:
{
    "api": "Catalogo de Animes",
    "desenvolvedor": [
        "Talita"
    ]
}
 
Lista de todos os animes
GET /itens
Retorna todos os animes cadastrados no arquivo dados.json.
Exemplo:
http://localhost:3000/itens
Resposta:
[
    {
        "id": 1,
        "titulo": "Naruto",
        "categoria": "Shounen",
        "ano": 2002,
        "detalhes": "Jornada de um ninja"
    }
]
 
 Buscar anime por ID
GET /itens/:id
Busca um anime específico utilizando seu identificador.
O parâmetro id é informado diretamente na URL.
Exemplo:
http://localhost:3000/itens/
Resposta encontrada:
{
    "id":1,
    "titulo":"Naruto",
    "categoria":"Shounen",
    "ano":2002
}
Caso não encontre:
Status:
404 Not Found
Resposta:
{
 "erro":"Item não encontrado"
}
 
Busca com filtros
GET /buscar
Permite realizar buscas utilizando parâmetros de consulta (query parameters).
 
Buscar por título
Exemplo:
http://localhost:3000/buscar?titulo=Naruto
Retorna animes que possuem o termo informado no título.
 
Buscar por categoria
Exemplo:
http://localhost:3000/buscar?categoria=Shounen
Retorna apenas animes da categoria escolhida.
 
Utilizando mais de um filtro
Exemplo:
http://localhost:3000/buscar?titulo=Naruto&categoria=Shounen
A API aplica os filtros juntos.
 
 Banco de Dados Local
A API utiliza o arquivo
dados.json
Como fonte de dados.
O arquivo contém um vetor com objetos contendo informações dos animes:
Exemplo:
{
    "id":1,
    "titulo":"Naruto",
    "categoria":"Shounen",
    "ano":2002,
    "detalhes":"História de um jovem ninja"
}
A leitura dos dados é realizada através do módulo nativo do Node.js:
fs (File System)
 
Tratamento de Erros
A API possui tratamento para:
 -IDs inexistentes;
 -Buscas sem resultados;
 -Respostas em formato JSON.
 
 Desenvolvedora
Projeto desenvolvido por:
Talita
 

 DESAFIO EXTRA FAZER UM FRONTEND DE BUSCA
 O QUE FOI FEITO:
 abrir index.html
 configuração de CORS para permitir a comunicação entre o index.html e o API do index.js
 manipulação de eventos assincronos (async/await) com fetch 
 (esses comandos transformam um processo que acontece em tempo incerto"asincrono" em algo que acontece em tempo real,sequencial,mais facil de ler "sincrono"
 
 async se coloca antes da funçao para dizer ao javascript "essa funcao vai lidar com algo um pouco mais lento" ja preparando pra espera
 
 await se usa antes de uma operação para dizer "pare essa funçao ate o servidor responder e quando o dado chegar voce guarda na variavel e continua para a proxima" 
 sem essas funçoes ficaria mais dificil)
 
