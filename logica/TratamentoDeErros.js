try{
    console.log(n1)
} catch(erro){
    console.log("não existo")
}

//O que diz a tentiva acima? tente executar, caso não, retorne o error 

function somar(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new ReferenceError("As entradas precisam ser números")
    }
    return a + b
}

try{
    console.log(somar('2', 3))
}catch(error){ //o erro  está na variável "error"
    //console.log(erro.message) 
    console.log("erro teste")
    console.log(error)
}

try{
    console.log(a)
}catch(e){
    console.log
}

//Lançando erros

function soma(y, x){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números')
    }
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))
}catch(error){
    console.log(error)
}