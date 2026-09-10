import http from 'node:http'

const server = http.createServer((req,res)=>{
res.setHeader('content-Type','text/html')
res.end(`
<head> <meta charset="UTF-8"></head>
<body>
<h1>Ola Mundo!!!</h1>
<h1> Ola Turma 43!!!</h1>

`)

})
server.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
})

