
const seriesAcervo = []
let novaSerie = ''
function cadastrar(titulo, genero, qtdTemp, nota){
   novaSerie = {
    titulo, 
    genero,
    qtdTemp,
    nota
   }
   return novaSerie
}



try{

    seriesAcervo.push(cadastrar("reis do crime", "acao", "3", "10\n"))
    seriesAcervo.push(cadastrar("reis do crime", "terror", "3", "10\n"))
    seriesAcervo.push(cadastrar("reis do crime", "romance", "3", "10"))

}catch(error){
    console.log(error)
}

/*for(let i of seriesAcervo){
    console.log(`nome: ${i.titulo}\n ${i.genero}\n ${i.qtdTemp}\n ${i.nota}`)
}*/

function procurarGenero(titulo){
    for(let i of seriesAcervo){
        if(i.genero === titulo)
            return console.log(i)
    }
}

function mediaFilmes(){
    let tot = 0
    let totNotas = 0
    for(let i of seriesAcervo){
        totNotas = i.nota
        tot++
    }
    return console.log(totNotas = totNotas / tot)
}

procurarGenero("terror")

mediaFilmes()