const nomes = ['leo', 'davi', 'aline']
nomes[0] = 'leonardo'
console.log(nomes)

nomes.push('leo') //adciona ao final
console.log(nomes)
nomes.unshift('leo2') //adcionando no começo do array
console.log(nomes)
nomes.pop() //elimina o ultimo elemento

const removido = nomes.pop() //guarda o elemento excluido

nomes.shift() //Exclui o item do começo do array                         
