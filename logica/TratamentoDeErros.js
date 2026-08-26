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
}catch(error){
    //console.log(erro.message) 
    console.log("erro teste")
}