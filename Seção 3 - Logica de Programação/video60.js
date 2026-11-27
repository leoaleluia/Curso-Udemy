function maiorMenor(n1, n2){
    if (n1 > n2){
        console.log("n1 é o maior")
    }else if (n1 === n2){
        console.log("Números equivalente")
    }else{
        console.log("n2 é mior")
    }
}

let n1 = 10
let n2 = 9
console.log(maiorMenor(n1, n2))