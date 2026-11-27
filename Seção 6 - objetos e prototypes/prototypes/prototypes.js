function Pessoa(nome, sobreNome){
    this.nome = nome;
    this.sobreNome = sobreNome
    this.nomeCompleto = () => `o seu nome Completo é ${this.nome} ${this.sobreNome}`

}

let nome = new Pessoa("leonardo", "Aleluia")
console.log(nome.nomeCompleto())
Pessoa.prototype.estouAqui = () => "aaaaaa"
Pessoa.prototype.nomee = function () {
    return this.nome + this.sobreNome
}
console.log(nome.estouAqui())
console.log(nome.nomee())

