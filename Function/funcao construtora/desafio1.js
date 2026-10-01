function Produto(nome, estoque, valor){
    this.nome = nome
    this.estoque = estoque
    this.valor = valor
    
    this.calcularEstoque = () =>{
        let tot = this.estoque * this.valor
        return tot
    }
}
const inventario = []

inventario.push(new Produto('feijão', 10, 8))
inventario.push(new Produto('feijão2', 10, 8))
inventario.push(new Produto('feijão3', 10, 8))

let totMercado = 0

function calcValorTotMercado(lista){
    for(let i of lista){
        totMercado += i.calcularEstoque()
    }
    return console.log(`${totMercado}`)

}

console.log(calcValorTotMercado(inventario))
