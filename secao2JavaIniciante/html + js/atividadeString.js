const nome = prompt('Digite seu nome completo')
function totLetras(){
    let qtd = 0
    let i = 0
    for(i = 0; i < nome.length; i++){
        qtd++
    }
    return qtd
}

document.body.innerHTML += `Seu nome é ${nome} <br />`
document.body.innerHTML += `Seu nome tem ${totLetras()}  <br /> `
document.body.innerHTML += `A segunda letra é ${nome[1] }  <br />`
document.body.innerHTML += `Qual o primeiro indice da letra do seu nome  ${nome.indexOf('a')} <br />`
document.body.innerHTML += `Qual o ultimo indice da letra do seu nome?  ${nome.lastIndexOf('a')} <br />`
document.body.innerHTML += `As ultimas 3 letras do seu nome  ${nome.slice(-3, nome.length) } <br />` 
document.body.innerHTML +=  `Seu nome em maiusculo ${nome.toUpperCase()} <br />`
document.body.innerHTML += `Seu nome em minusculo ${nome.toLowerCase()}<br /> `