const pessoa = {
    nome: 'Leo',
    idade: 28,
    curso: 'ads',

    fala(){
        console.log(`Minha idade é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
    }

};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();