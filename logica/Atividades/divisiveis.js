function div(num){
    if (num > 0 &&  num <= 100){
        if(num % 3 === 0 && num % 5 === 0){
            return console.log("fizzbuss")
        } else if(num % 5 === 0 ){
            return console.log("buss")
        }else if (num % 3 === 0){
            console.log("fizzBuss")
        }else{
            return console.log("não é divisivel")
        }
    }
}

div(15 )