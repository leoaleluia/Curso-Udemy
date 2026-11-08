function Produto(nome, preco, estoqueee, cod){
    this.nome = nome;
    this.preco = preco
    this.cod = cod
    let _estoque = estoqueee
    const codigo = (num) =>{
        if (num === 1){
            this.cod = 1
            return 1
        }
        this.cod = 0
    }

    Object.defineProperty(this, 'estoquee', {
        enumerable: true, //mostra a chave em um indice
        configurable: false, //ninguem alltera a chave pu apagar
        get: function(){
            return _estoque
        },
        set: function(valor){
            if(typeof valor === 'number' && valor >= 0){
                _estoque = valor
                
            }else{
                console.log("bad value")
            }
            
        }

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

const p1 = new Produto("caixa", 10, 10)

console.log(p1.estoquee)