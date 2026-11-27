function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay(){
            this.display.value = '';
        },

        inicia(){
            this.cliqueBotoes();
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)
                if(!conta){
                    alert('conta inválida')
                    return
                }
                this.display.value = String(conta);
            }catch(e){
                alert('conta inválida')
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                    this.numeros()
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }

            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor;

        },
        numeros(num){

        }

    };
}

const calc1 = criaCalculadora();
calc1.inicia();