const produto = {nome: "celular", valor: 1500};
const produto2 = {...produto, config: "com placa de video"} // para alterar o valor apenas de um obj
const caneca = Object.assign({}, produto)
produto2.nome = "notebook"
produto2.valor = 1700
console.log(produto)
console.log(produto2)

/*for(let i in produto){
    console.log(i)
}*/

Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable:false
})

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //metodo para observar os property dos objetos

console.log(Object.entries(produto)) //valor e chaves
console.log(Object.values(produto)) //apenas o valor

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}
