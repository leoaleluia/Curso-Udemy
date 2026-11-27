const paragrafos =  document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')
const estiloBoody = getComputedStyle(document.body)
const background = estiloBoody.backgroundColor

for(let i of ps){
    i.style.backgroundColor = background
    i.style.color = 'white'
}