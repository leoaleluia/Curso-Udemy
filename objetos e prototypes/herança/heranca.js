function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;  
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia
};

Produto.prototype.desconto = function (quantia){
    this.preco += quantia
}; 

function Camisa(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa
Camisa.prototype.aumento = function (porcentagme){
    this.preco = this.preco + (this.preco *     porcentagme / 100)
}

function Caneca(modelo, preco, cor){
    Produto.call(this, modelo, preco)
    this.cor = cor

}

Caneca.prototype = Object.create(Produto.prototype) // Para receber os prototype do produto
Caneca.prototype.constructor = Caneca

const caneca = new Caneca("curta", 50, "PRETA")
caneca.aumento(10)
console.log(caneca)
const camisa = new Camisa("nike", 10, "preta")
camisa.aumento(2)
