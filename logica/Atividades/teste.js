const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = await rl.question("Digite seu nome: ");
let idade = await rl.question("seu idade")
console.log(`${nome} ${idade}`);

rl.close();