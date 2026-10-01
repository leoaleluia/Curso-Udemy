const nomes = ['leo', 'davi', 'aline']
nomes[0] = 'leonardo'
console.log(nomes)

nomes.push('leo') //adciona ao final
console.log(nomes)
nomes.unshift('leo2') //adcionando no começo do array
console.log(nomes)
nomes.pop() //elimina o ultimo elemento
delete nomes[1]

const removido = nomes.pop() //guarda o elemento excluido

nomes.shift() //Exclui o item do começo do array   

const nomes2 = ['joao', 'maria', 'jose', 'wallace', 'rosana']
const slc = nomes2.slice(1,3) //pega de jose ate joão    
const novo = [...nomes2] //essa linha não permite que o parametro seja passado por referencia

const nomeRemovido = nomes2.pop()
