
//Forma tradicional sofre hoisting completo, ou seja, é reconhecida em qualquer parte do código
function somar(a, b){
    return a + b
}

//Atribuindo a uma variável

const nome = function(nome){
    return nome
}

const subtrair = (num) =>{
    return num - 2
}

const subtrair2 = nomero => numero - 2 // sintaxe simplificado com retorno implicto (arrow function)

// Como metodo de um objeto

const calculadora = {
    subtrair: function (a, b){
        return a - b
    },

    somar: function(a, b){
        return a + b
    }
}

calculadora.somar(1, 2) //chamando o metodo dentro do objeto