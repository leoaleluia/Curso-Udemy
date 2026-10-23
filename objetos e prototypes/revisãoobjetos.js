const pessoa1 = new Object()
pessoa1.nome = 'luiz'
pessoa1.idade = 28
pessoa1.falarNome = function () {
    return this.nome
}

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear()- this.idade
}


for(let chave in pessoa1){
    console.log(chave)
    console.log(pessoa1[chave])
}

console.log(pessoa1.getDataNascimento())