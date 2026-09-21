function criarPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return console.log(`${this.nome} está falando ${assunto}`)
        },
        altura: a,
        peso: p,
        imc: function(){
            imc = this.peso / (this.altura * this.altura)
            return console.log(`O imc de ${this.nome} é ${imc}`)
        }
    }
}

const p1 = criarPessoa('leo', 'aleluia', 1.68, 58)
p1.fala("futebol")
p1.imc()