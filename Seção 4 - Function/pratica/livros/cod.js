    function Livros(livro, autor, pag){
        this.livro = livro
        this.autor = autor
        this.pag = pag

        this.descrever = () =>{
            return `o livro ${this.livro} foi escrito pelo autor ${this.autor} com ${this.pag}`
        }
    }

    function iniciar(){
        let livro = document.getElementById('livro').value
        const novo = new Livros(livro, 'leo2', 32)
        let res = document.getElementById('res')
        res.innerHTML = novo.descrever()

    }