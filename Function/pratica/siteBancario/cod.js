let minhaConta = null;

function ContaBancaria(titular, saldoInicial){
    this.titular = titular
    this.saldoInicial = Number(saldoInicial)

    this.descrever = () =>{
        return `${this.titular}`
    }

    this.depositar = function(valor){

        if(valor > 0){
            valor = Number(valor)
            this.saldoInicial += valor
            return `novo saldo de ${this.saldoInicial}`
        }
    }
    this.saque = function(valor){
        valor = Number(valor)
        if(this.saldoInicial > valor){
            this.saldoInicial -= valor
        }else{
            `Não há saldo fuciente ${this.saldoInicial}`
        }
    }
}

function enviar(){
    let inputTitular = document.getElementById('titular').value
    const saldo =  document.querySelector('.saldo')
    let nome = document.getElementById('nomee')

    let minhaConta =  new ContaBancaria(inputTitular, 10)
    nome.innerHTML =  minhaConta.descrever()
}