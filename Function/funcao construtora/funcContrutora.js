function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': está aprendendo')
    }
}

const p1 = new Pessoa("leo", "aleluia")
p1.metodo();