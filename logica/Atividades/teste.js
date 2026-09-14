const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let peso
let idade
readline.question('Qual o seu peso em kg? ', (resposta) => {
    idade = resposta
    readline.close
});

readline.question('Qual o seu peso em kg? ', (resposta) => {
    peso = resposta
    readline.close
});

console.log(`peso:  ${peso} ${peso}`)

