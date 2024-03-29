const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")


const data = new Date()

// -- DATA --
let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes++
mes = mes < 10 ? "0" + mes : mes
const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = `Data: ${data_r}`


const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo    
    div_relogio.innerHTML = `Hora: ${hora}` +':'+ `${minuto}` +':'+ `${segundo}`
}

const intervalo = setInterval(relogio,1000)




// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegungos desde 1 de janeiro de 1970, 00:00:00UTC)
// Date.now() = (milisegungos desde 1 de janeiro de 1970, 00:00:00UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data
