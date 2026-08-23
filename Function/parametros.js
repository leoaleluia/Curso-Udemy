//funções sem parametros explicitos  e usando o arguments para retornar ela

function teste(){
    let totNum = 0

    for(let argumentos of arguments){
        totNum++
    }
    console.log(totNum)
}

teste(1, 2, 3, 'n')

function teste2(a, b = 0){ // testa se B existe, caso não receebe 0
     // maneira antiga de se testar se b existe, caso exista ele permanece normal, se não é 0
    console.log(a + b)
}

//Atribuindo via desestruturação

function nome({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}

let obj = ({nome: 'leonardo', sobrenome: 'aleluia', idade: 28})
nome(obj) 
//ou
nome({nome:'leo', sobrenome='aleluia', idade: 28})

//Usando o restOperetion

function teste3(operador, acumulador, ...numeros){
    
    for(let i of numeros){
        if (operador === '+') acumulador += numero
         if (operador === '-') acumulador -= numero
         if(operador ==='/') acumulador /= numero
         if(operador === '*') acumulador *= numero
        i += i
        acumulador++
    }

    console.log(i)
}

teste3()