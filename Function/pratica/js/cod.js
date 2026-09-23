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