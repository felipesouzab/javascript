const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio("alarme.mp3")
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false 
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date (ts_alarme)
    let h = dt_alarme.getHours()
    h = h < 10 ? "0" + h : h
    let m = dt_alarme.getMinutes()
    m = m < 10 ? "0" + m : m
    let s = dt_alarme.getSeconds()
    s = s < 10 ? "0" + s : s
    hora_alarme.innerHTML = "Hora do Alarme:" + h + ":" + m +":"+ s

})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime = 0;
})


const data = new Date()

// -- DATA --
let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes++
mes = mes < 10 ? "0" + mes : mes
const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = `Data: ${data_r}`

// --RELÓGIO
const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo    
    div_relogio.innerHTML = `Hora: ${hora}` +':'+ `${minuto}` +':'+ `${segundo}`
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
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
