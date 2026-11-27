function Calculadora(){

    this.display = document.querySelector('.display')
    
    this.capturaCliques = () =>{
        document.addEventListener('click', e => {
            const el = e.target
            if(el.classList.contains('btn-num')) this.addnumDisplay(el);

            if(el.classList.contains('btn-clear')) this.clear(el)

            if(el.classList.contains('btn-del'))this.del()

            if(el.classList.contains('btn-eq')) this.fazerConta();
        })
    }

    this.capturaEnter = () =>{
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode === 13){
                this.fazerConta()
            }
        })
    }

    this.clear = () => this.display.value = ''

    this.del= () => this.display.value = this.display.value.slice(0, -1)
    
    this.fazerConta = () =>{
        let conta = this.display.value
        conta = eval(conta)
        if(!conta){
            try{
                alert("conta inválida")
            }catch{
                alert('tente de novo')
            }
        }
        this.display.value = String(conta);
    }

    this.addnumDisplay = el => {this.display.value += el.innerText
        this.display.focus()
    }

    

    this.inicia = () => {this.capturaCliques()
        this.capturaEnter()
    }
}

const calculadora = new Calculadora()
calculadora.inicia() 