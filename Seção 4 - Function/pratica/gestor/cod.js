function Produto(nome, preco, quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade

    this.total = () => { 
        let total = this.quantidade * this.preco
        return `o total é ${total}`
    }

    this.desc = () => {
        let desconto = this.preco * 0.1
        this.preco -= desconto
        return `${this.preco}`
    }
}

function adicionar(){
    let nome = document.getElementById('Produto').value
    let preco = document.getElementById('preco').value
    let qtd = document.getElementById('qtd').value
    let produto = new Produto(nome, Number(preco), Number(qtd))

    let estoque = document.getElementById('produto')
    estoque.innerHTML = produto.total()
}