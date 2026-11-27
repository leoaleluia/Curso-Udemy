function criarPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return console.log(`${this.nome} ${this.sobrenome}`)
        },
        fala: function(assunto){
            return console.log(`${this.nome} está falando ${assunto} sobre o peso do jogar carlos que é ${this.peso}`)
        },
        altura: a,
        peso: p,
        get imc(){ //o imc está fingindo ser um atritubo por conta do "get", mudamos o acesso do metodo com p1.imc
            imc = this.peso / (this.altura * this.altura)
            return console.log(`O imc de ${this.nome} é ${imc.toFixed(2)}`)
        }
    }
}

const p1 = criarPessoa('leo', 'aleluia', 1.68, 58)
p1.fala("futebol")
p1.imc
p1.nomeCompleto