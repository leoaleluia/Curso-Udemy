/*function livro(titulo, autor, paginas){
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas

}

const livro = new livro*/

function Aluno(nome, nota1, nota2){
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2
    this.media = (this.nota1 + this.nota2) / 2
    this.status = () => {
        if(this.media >= 7){
            console.log(`${this.nome} foi aprovado com media ${this.media}`)
        }else{
            console.log(`${this.nome} foi reprovado com media ${this.media}`)
        }
    }
}

const aluno1 = new Aluno('leonardo', 8, 9)
const aluno2 = new Aluno ('leonardo2', 5, 4)
aluno1.status()