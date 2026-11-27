function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return (Math.floor(num))
    
}


function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback() //esse callback() é a chamada da função que está no parametro da linha 8
    }, rand());

}

function f2(callback){
     setTimeout(function(){
        console.log('f2')
        if(callback) callback() //virou uma função
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, 200)
}

f1(f1Callback);
function f1Callback(){ //aqui é a chamada da fução que  foi criada na linha 11
    f2(f2Callback)
}

function f2Callback(){ //segue o mesmo padrão, a chamada da função é realizida pois, f2Callback virou uma função, observe na linha 32
    f3(f3Callback)
}

function f3Callback(){
    console.log('olá mundo')
}
f2()
f3()  
console.log("ola mundo")