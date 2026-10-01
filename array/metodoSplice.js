const nomes2 = ['joao', 'maria', 'jose', 'wallace', 'rosana']

nomes2.splice(4, 1) //remo aprenas o 4 e cria um arrai com rosana
nomes2.splice(3, 2) //remove wwale e rosana e cria um array com os dois ultimos nomes do array, observe que o 2 significa que são dois elementos a serem removidos a partir do indice 3
nomes2.splice(3, 0, 'luiz') //ele adciona o elemento no indice indicado
nomes2.splice(3,2,'luiz') //adcionaria o 'luiz' no indice 3 e excluiria os dois itens que vem após o indice 2

//pop exclui o ultimo
nomes2.splice(-1, 1)
//shift 
nomes2.splice(0, 1) //exclui o primeiro

//push
nomes2.splice(nomes.length, 0, 'clara')

//unshifi
nomes.splice(0, 0, 'leo,') //  a partir do 0 ele adciona o leo

//o primeiro parmetro da funçao diz respeito ao indicque que iremos conversar, o segundo é qual iten iremos excluir e o ultimo é
