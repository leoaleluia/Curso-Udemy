const lista = [1, 3, 4, 6, 8, 9, 10]
const lista2 = lista.map(function(valor, indice){
    //console.log(valor, indice)
    //return console.log(`${2*valor}`)
})

const listaArrowFunction = lista.map(valor => valor * 2);

console.log(listaArrowFunction)
const pessoas2 = [
    {nome: 'luiz', idade: 30},
    {nome: 'luiz2', idade: 30},
    {nome: 'luiz3', idade: 30},
    {nome: 'luiz4', idade: 30},
    {nome: 'luiz5', idade: 30},
]

const pessoas = pessoas2.map(function nome(nomes){
    console.log(`${nomes.nome}`)
})

const pessoas1 = pessoas2.map(valor => valor.nome)
const pessoas3 = pessoas2.map(valor => ({idade3: valor.idade}))
const comId  = pessoas2.map(function (obj, indice){
    obj.id = indice
    return obj
})


const numeros = [2, 6, 5, 9, 8, 6, 10]
const comReduce = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(comReduce)