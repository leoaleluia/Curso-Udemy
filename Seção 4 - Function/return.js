function soma(a, b){
    return a + b
}

console.log(soma(1, 5))


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

let nome = falaFrase("olá") 
console.log(nome("mundo"))
//entendendo o código, na linha 15, a variável nome recebeu o retorno da função cahamada, porém o retorno é uma outra função, portanto, a var nome virou a função de dentro da função frase

function criarMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadriplica = criarMultiplicador(4)

console.log(quadriplica(10))