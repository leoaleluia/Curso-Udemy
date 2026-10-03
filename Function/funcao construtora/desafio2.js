function ItemCarrinho(nome, preco, qtd){
    this.nome = nome
    this.preco = preco
    this.qtd = qtd
}

let carrinho = []

function addCarrinho(nome, preco, qtd){
    carrinho.push(new ItemCarrinho(nome, preco, qtd))
    return `o item ${nome} foi adicionado com sucesso`
}

let tot = 0
function exibir(lista){
    let lista2 = []
    lista2 = lista
    
    for(let i of lista2){
        console.log(`${i.nome} : ${i.preco}`)
        tot++
    }
    return console.log(`${tot}`)
}

try{
    addCarrinho('cacau', 10, 5)
    addCarrinho('manda', 20, 5)
    exibir(carrinho)
}catch(e){
    console.log(console.error());
}