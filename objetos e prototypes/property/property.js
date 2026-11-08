function Produto(nome, preco, estoque, cod){
    this.nome = nome;
    this.preco = preco
    this.cod = cod
    const codigo = (num) =>{
        if (num === 1){
            this.cod = 1
            return 1
        }
        this.cod = 0
    }

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave em um indice
        value: estoque,
        writable: false, //valor não pode ser alterado
        configurable: false //ninguem alltera a chave pu apagar

    });
    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    })
}

const p1 = new Produto("p1", 30, 10);
p1.estoque = 12
console.log(p1.estoque);

p1.cod = 1
console.log(p1.preco)