let minhaConta = null;

function ContaBancaria(titular, saldoInicial){
    this.titular = titular
    this.saldoInicial = Number(saldoInicial)

    this.descrever = () =>{
        return `${this.titular}`
    }

    this.depositar = valor => {

        if(valor > 0){
            valor = Number(valor)
            this.saldoInicial += valor
            return `novo saldo de ${this.saldoInicial}`
        }
    }
    this.saque = valor => {
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
    let saldo =  document.getElementById('saldoIni').value
    let saque = document.getElementById('saque').value
    let depoosito = document.getElementById('deposito').value
    let nome = document.getElementById('nomee')

    
    let minhaConta =  new ContaBancaria(inputTitular, saldo)
    nome.innerHTML =  minhaConta.descrever()

     if(saldo){
        saldo.innerHTML = minhaConta.saldoInicial
    }

    if(saque) {

        let saqueF = () =>{
            saldoSaque = Number(saque)
            minhaConta.saldoInicial -= saldoSaque
        }
    }

    if(depoosito){
        let dep = () =>{
            saldoDep = Number(depoosito)
            minhaConta.saldoInicial += saldoDep
        }
    }
}