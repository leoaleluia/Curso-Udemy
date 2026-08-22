
const usuario = 10

const nivel = usuario >= 100? 'Usuario vip' : 'usuario Normal;'

const usuario1 = null
const corPadrao = usuario1 || 'preto' //se o usúario for null, ele recebe por padrão o preto

//objeto date

const data = new Date //objeto date
const diaDaSemana = data.getDay()


const data2 = new Date ('1987 - 02 - 21 00:00:00')
const diaSemana = data2.getDay()

function addZero(num){
    return num >= 10 ? num : `0${num}`
}
function informeDATA(data){
    
    const data1 = new Date
    const dia = addZero(data1.getDay())
    const mes = addZero(data1.getMonth())
    const ano = addZero(data1.getFullYear())
    const horas = addZero(data1.getHours())
    const minutos = addZero(data1.getMinutes())
    const segundos = addZero(data1.getSeconds())

    return `${dia}/${mes}/${ano} ${horas} ${minutos} ${segundos}`
}

const data3 = new Date
const informações = informeDATA(data3)
console.log(informações)