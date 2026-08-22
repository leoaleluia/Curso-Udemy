function iniciar(){
    const horas = document.getElementById('hr')
   
    function getMes(mes){
        switch(mes){
            case 0:
                return "janeiro"
            case 1:
                return "fevereiro"
            case 2:
                return "março"
            case 3: 
                return "abril"
            case 4:
                return "maio"
            case 5:
                return "junho"
            case 6:
                return "julho"
            case 7:
                return "agosto"
            case 8:
                return "setembro"
            case 9:
                return "outubro"
            case 10:
                return "novembro"
            case 11:
                return "dezembro"
            default:
                return "data invalida"
        }
    }

    function horario(data){
        const data1 = new Date
        
        const dia = data1.getDay()
        const mes = data1.getMonth()
        const ano = data1.getFullYear()
        const hora = data1.getHours()
        const minutos = data1.getMinutes()
        
        let diaSemana
        
        switch (dia){
            
            case 0:
                diaSemana = 'domingo'
                return horas.innerHTML = `${diaSemana}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            case 1:
                diaSemana = 'Segunda'
                return horas.innerHTML = `${diaSemana}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            case 2:
                diaSemana = 'Terça'
                 return horas.innerHTML = `${diaSemana}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            case 3:
                diaSemana = 'quarta'
                 return horas.innerHTML = `${diaSemana}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            case 4:
                diaSemana = 'Quinta'
                 return horas.innerHTML = `${diaSemana}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            case 5:
                diaSemana = "Sexta"
                 return horas.innerHTML = `${diaSemana}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            case 6:
                diaSemana = "Sabado"
                let dia2 = data1.getDate()
                
                return horas.innerHTML = `${diaSemana}, ${dia2} de ${getMes(mes)} de ${ano} ${hora}:${minutos}`
            default:
                return "data inválida"
        }
    }

    let data4 = new Date
    horario(data4)
}