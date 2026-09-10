import express from "express"
import cors from "cors" 
import fs from "fs"

const app = express();
app.use(cors());
const PORT = 3000;
const dados = JSON.parse(fs.readFileSync("./dados.json", "utf-8"));



app.get("/", (req, res)=>{
    res.json({
        api:"Catalogo de Animes",

        desenvolvedor:["Talita"]
    });
});
app.get("/itens", (req, res) => {
    res.status(200).json(dados);
});

app.get("/itens/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = dados.find(i => i.id === id);
    if (item){
        res.status(200).json(item);
    } else{
        res.status(404).json({ erro: "Item não encontrado" });
    }
});

app.get("/buscar", (req, res) => {
    // Captura os parâmetros após o ? na URL
    const { titulo, categoria } = req.query; 
    let resultados = dados;

    // Filtra pelo título 
    if (titulo) {
        resultados = resultados.filter(item => 
            item.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    // Filtra pela categoria 
    if (categoria) {
        resultados = resultados.filter(item => 
            item.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }

    // Retorna o resultado final
    res.status(200).json(resultados);
});








app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});