const bancoDeDadosFicticio = `[
{"id":1,"nome":"Matrix","ano":1999},
{"id":2,"nome":"O Sengor dos Anéis","ano":2001},
{"id":3,"nome":"Carros","ano":2006}
]`;

const filmes = JSON.parse(bancoDeDadosFicticio)

const filmeBuscado = filmes.find(filme=> filme.id ===2)

console.log(filmeBuscado)