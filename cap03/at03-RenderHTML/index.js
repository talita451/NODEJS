import http from "http"
import fs from"node:fs"
import path from "node:path"
import { fileURLToPath} from "url"

const PORT = 3000
const __filename = fileURLToPath(import.meta.url) //pegando o caminho do arquivo
const __dirname = path.dirname(__filename)// pegando o caminho do diretorio

const server = http.createServer((req, res)=> {
    const urlObj = new URL (req.url, `http://${req.headers.host}`) //capturando a url 

    //descobrir qual parte dela guarda o nome da pagina que quer acessar(pathname)

    // substring(1) tansforma o texto em um array ["/", "Sobre"] contando a partir da barra (guarda o nome da pagina)

    let pagina= urlObj.pathname.substring(1)

    // variavel = pergunta? verdadeiro : falso ex // sobre
    pagina = pagina === ''? 'index.html': pagina

    //pagina não tem .html então adicione = 'sobre.html'
    if (! pagina.includes('html')){
        pagina += '.html'
    }

    let caminhoArquivo = path.join(__dirname, pagina)// descobrindo o caminho do arquivo

      if (fs.existsSync(caminhoArquivo)){// vai le o arquivo que esta no caminho, se existir o caminho vsi executar o if
        fs.readFile(caminhoArquivo, (err, data)=>{ // verificando se o caminho existe// fez o processamento ai cria dois armazenamentos um de erro e um de dados, se der erro guarda  em Err e se der certo guarda em data
            if (err){
                res.writeHead(500, {'Content-Type': 'text/html'})
                return res.end('<h1>Erro interno do servidor</h1>')
            }
            res.writeHead(200,{'Content-Type': 'text/html'}) // mostrar a pagina
            res.end(data)
        })
    }
else{
    caminhoArquivo = path.join(__dirname, 'pg404.html')
    fs.readFile(caminhoArquivo, (err, data)=>{
        res.writeHead(404, { 'Content-Type': 'text/html'})
        res.end(data)
    })

}

})
server.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})