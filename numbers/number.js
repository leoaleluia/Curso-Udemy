//convertendo para strign

let num = 5
num.toString() //valor temporario
console.log(typeof num)
num = num.toString // mudou para permanente

let num2 = 1000000
console.log(num2.toFixed(2)) //apenas duas casas decimais

//Usando o math
let num3 = Math.round(Math.random() * (20- 10) + 10)
console.log(num3)