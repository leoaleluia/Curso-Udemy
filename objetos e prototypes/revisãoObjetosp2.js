/*function criarPessoas(nome, sobreNome){
    return {
        nome, 
        sobreNome,
        get nomeCompleto(){
            return `${this.nome}, ${this.sobreNome}`
        }
    }
}

const p1 = criarPessoas('luiz', 'aleluia')
console.log(p1.nomeCompleto)
p1.nome = 'leonardo'
console.log(p1.nomeCompleto)*/

 function Pessoas(nome, sobreNome){
    this.nome = nome,
    this.sobreNome = sobreNome
 }
 