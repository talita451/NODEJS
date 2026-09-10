const novoAluno = {
nome: "Carlos",
curso:"Tecnico em informatica",
UC:13,
ensinoMedComp:true

}
const dadosTratados = JSON.stringify(novoAluno)
console.log(dadosTratados)

console.log(JSON.stringify(novoAluno,null,4));