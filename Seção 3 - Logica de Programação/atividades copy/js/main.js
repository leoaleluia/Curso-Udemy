const form = document.querySelector('#form')
const  peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')

const tst = document.querySelector('#tst')

form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log("evento ok")
    setMsg('olá mundo')

})

function setMsg( msg){
    const resultado = document.querySelector('#tst')
    resultado.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = msg
    p.classList.add('paragrafo-resultado')
    resultado.appendChild(p)
}