function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');    
    
    const pessoas1 = [];



     class pessoas{
            constructor(nome, sobrenome, peso, altura ){
                this.nome = nome;
                this.sobrenome = sobrenome;
                this.peso = peso;
                this.altura = altura;
            }

            getApresenta(){
                return `bem vindo ${this.nome} com sobre nome ${this.sobrenome} peso ${this.peso} ${this.altura}`

            }
        }

        class ListadePessoas{
            adcionar(pessoa3) {
                pessoas1.push(pessoa3)
            }
        }

        const gerenciador = new ListadePessoas()


    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const resultado = form.querySelector('.resultad');
        

        const pessoa2 = new pessoas(nome.value, sobrenome.value, peso.value, altura.value)
        ListadePessoas.adcionar(pessoa2)

        return resultado.innerHTML = `${pessoa2}`
        
        resultado.innerHTML += `<p>${pessoa2.getApresenta()}</p>`

        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';
    }



    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();