cont 

let nome = 'leo' //Não posso reatribuir um valor a uma let as lets são de escopo de criação de bloco
var nome2 = 'Leo' // ja posso atribuir

//o bloco:

function nome(nome){

    let nome = nome //escopo de criação
}

///////////////////////////////////////////////////////////////////////////////////////////////
//Atribuição via desestruração

let a = 'A'
let b = 'B'
let c = 'C'

const numeros = [1, 2, 3]
[a, b, c] = numeros 

const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

////////////////////////////////////////////////////////////////////////////
//Desestutruração via objetos

const pessoa = {
    nome: 'luiz',
    idade: 25,
    endereco:{
        logadouro: 'casa',
        numero: 59
    }
}

const {nome} = pessoa 
console.log(nome)

const {numer: num}  = pessoa // Pega a chave num de pessoa e atribui a variável

const {
    endereco: {numero: n = 32, logadouro},
    endereco, //Pega os vaores de numero e logadouro e adciona a variável endereço, o "numero" se chamara n 
    // por cont da sintaxe
} = pessoa;
console.log(n, logadouro)
console.log(r)



const { //Atribuiu um novo valor a N
    endereco: {numero: novoN},
    endereco
}
