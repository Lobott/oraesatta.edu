const nuovoTimer = document.getElementById("nuovo-timer")

nuovoTimer.addEventListener('click', () => {
    localStorage.clear()
    minutiEsonero = 0
    minutiEsame = 0
    countdownEsonero.innerText = ""
    countdownEsame.innerText = ""
    window.location.href = "index.html"
})

//recupero dei dati nel localStorage
let minutiEsonero = parseInt(localStorage.getItem("minutiEsonero")) || 0
let minutiEsame = parseInt(localStorage.getItem("minutiEsame")) || 0


// ------------------------ TIMER ------------------------


const countdownEsonero = document.getElementById("countdown-esonero")
const countdownEsame = document.getElementById("countdown-esame")

function countdown() {
    if(minutiEsonero == null) {
        countdownEsonero.innerText = ""
    }
    if(minutiEsame == null) {
        countdownEsame.innerText = ""
    }
    if(minutiEsonero > 0) {
        countdownEsonero.innerText = `Tempo rimanente per l'esonero: ${minutiEsonero} minuti.`
        let esoneroTimer = setInterval(() => {
            minutiEsonero--
            countdownEsonero.innerText = `Tempo rimanente per l'esonero: ${minutiEsonero} minuti.`
            if (minutiEsonero == 1) {
                countdownEsonero.innerText = `Tempo rimanente per l'esonero: ${minutiEsonero} minuto.`
            } else if (minutiEsonero <= 0) {
                clearInterval(esoneroTimer)
                countdownEsonero.innerText = "Il tempo per l'esonero è terminato."
                countdownEsonero.style.color = "#880808"
            }
        }, 60000)
    }
    
    if(minutiEsame > 0) {
        countdownEsame.innerText = `Tempo rimanente per l'esame: ${minutiEsame} minuti.`
        let esameTimer = setInterval(() => {
            minutiEsame--
            countdownEsame.innerText = `Tempo rimanente per l'esame: ${minutiEsame} minuti.`
            if (minutiEsame == 1) {
                countdownEsame.innerText = `Tempo rimanente per l'esame: ${minutiEsame} minuto.`
            } else if (minutiEsame <= 0) {
                clearInterval(esameTimer)
                countdownEsame.innerText = "Il tempo per l'esame è terminato."
                countdownEsame.style.color = "#880808"
            }
        }, 60000)
    }
}

countdown()


// ------------------------ OROLOGIO ------------------------


const ora = document.getElementById("ora")
const data = document.getElementById("giorno")
const sole = document.getElementById("sun")
const luna = document.getElementById("moon")
luna.classList.add("hidden")

const giorni = [
    "Domenica", "Lunedì", "Martedì", "Mercoledì", 
    "Giovedì", "Venerdì", "Sabato"
]

const mesi = [
    "Gennaio", "Febbraio", "Marzo",
    "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre",
    "Ottobre", "Novembre", "Dicembre"
]

function mostraOra() {

    let date = new Date
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let dayOfTheWeek = date.getDay()
    let dateArray = date.toLocaleDateString().split("/")
    
    let completeDate = `${giorni[dayOfTheWeek]} ${dateArray[0]} ${mesi[parseInt(dateArray[1]) - 1]} ${dateArray[2]}`

    minutes < 10 ? minutes = `0${minutes}` : minutes = minutes
    seconds < 10 ? seconds = `0${seconds}` : seconds = seconds

    ora.innerHTML = `${hour}:${minutes}:${seconds}`
    data.innerHTML = completeDate

}

setInterval(mostraOra, 1000)

sole.addEventListener('click', () => {
    sole.classList.add("hidden")
    luna.classList.remove("hidden")
    document.body.style.backgroundColor = "#f3f3f3"
    ora.style.color = "#010101"
    data.style.color = "#010101"
    countdownEsonero.style.color = "#010101"
    countdownEsame.style.color = "#010101"
    nuovoTimer.style.border = "1px solid #010101"
    nuovoTimer.style.color = "#010101"
})

luna.addEventListener('click', () => {
    luna.classList.add("hidden")
    sole.classList.remove("hidden")
    document.body.style.backgroundColor = "#010101"
    ora.style.color = "#f3f3f3"
    data.style.color = "#f3f3f3"
    countdownEsonero.style.color = "#f3f3f3"
    countdownEsame.style.color = "#f3f3f3"
    nuovoTimer.style.border = "1px solid #f3f3f3"
    nuovoTimer.style.color = "#f3f3f3"
})