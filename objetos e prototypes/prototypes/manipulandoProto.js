/* const objA = {
    chaveA: 'A'
};

const objB = {
    chabeB: 'B'
    //___proto___ = objA
}

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)  */

function Produto (nome, preco){
    this.nome = nome
    this.preco = preco
}

function Teste(nome, data){
    this.nome = nome
}

Teste.prototype //todo objeto que for criado a partir o "const fulano = object.create(teste.prototyoe)", trará as caractersticas da estrutura assossiada a ela
Teste.prototype.idade = 20
const p4 = Object.create(Teste.prototype)
const p3 = Object.create(Teste.prototype)
p3.nome = 'leo'
console.log(p3.nome)
console.log(p3.idade)
console.log(p4.nome, p4.idade)

Produto.prototype.reduzirPreco = function (){
    this.preco = this.preco - (this.preco * 0.1);
}

const p1 = new Produto("prego", 60)
p1.reduzirPreco()
console.log(p1)