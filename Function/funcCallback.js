function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return (Math.floor(num))
    
}


function f1(callback){
    setTimeout(function(){
        const dadosf1 = "executou f1"
        if (callback) callback(dadosf1) //esse callback() é a chamada da função que está no parametro da linha 8
    }, rand());

}

function f2(callback){
     setTimeout(function(){
        console.log(`dados de f1 ${f1()}`)
        const dadosf2 = `dados de f2`

        if(callback) callback(dadosf2) //virou uma função
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log(`Dados vindos de f2 ${f2()}`)
        const dadosf3 = 'Fim do ciclo'
        if(callback) callback(dadosf3)
    }, rand())
}

f1(function f1callback(retornof1){
    f2(function f2Callback(retornof2){
        f3(function f3callback(resultadoFinal){
            console.log("fim do ciclo")
        })
    })
});
