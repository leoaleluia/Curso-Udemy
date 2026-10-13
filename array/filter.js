/*const numeros = [23, 32, 0]
const n2 = []
for(let i of numeros){
    if (i > 10){
        n2.push(i)
    }
}


const nume = numeros.filter(num => num > 10) //a arrw function só retorna os numeros maiores qie 10
console.log(nume)*/

// ##################################################################################//
function Estoque(modelo, ano, placa){
    this.modelo = modelo
    this.ano = ano
    this.placa = placa
    this.ctr = 0
    this.status = () => this.ctr != 0 ? "carro alugado": "carro indisponivel"
    this.alugar = () => {
        this.ctr = 1
    }
    this.liberar = () =>{
        this.ctr = 0
    } 
}

let carros = []

carros.push(new Estoque("uno", 2010, 1855))
carros.push(new Estoque("uno1", 2011, 1255))
carros.push(new Estoque("uno2", 2011, 1355))
carros.push(new Estoque("uno3", 2013, 1355))
carros.push(new Estoque("uno4", 2014, 1455))

console.log(carros.filter(carros => carros.ano === 2010 && carros.placa === 1855))