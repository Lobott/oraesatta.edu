const istruzioni = document.getElementById("istruzioni")

istruzioni.addEventListener('click', () => {
    alert("Inserisci il tempo per le prove nel formato hh:mm, clicca \"imposta\" per salvare la scelta, poi \"procedi\".\nVuoi visualizzare solo l'ora esatta? Clicca direttamente sul pulsante \"procedi\".")
})

document.getElementById("procedi").addEventListener('click', () => {
    window.location.href = "ora.html"
})
document.getElementById("btn-esonero").addEventListener('click', () => {
    const esonero = document.getElementById("tempo-esonero").value
    const esoneroArray = esonero.split(":")
    const minutiEsonero = (parseInt(esoneroArray[0]) * 60) + parseInt(esoneroArray[1])
    // salvo nei dati del browser invece di importare i moduli
    localStorage.setItem("minutiEsonero", minutiEsonero)

    const mostraTempoEsonero = document.getElementById("mostra-tempo-esonero")
    mostraTempoEsonero.innerText = `Per l'esonero gli studenti avranno: ${minutiEsonero} minuti.`

})
document.getElementById("btn-esame").addEventListener('click', () => {
    const esame = document.getElementById("tempo-esame").value
    const esameArray = esame.split(":")
    const minutiEsame = (parseInt(esameArray[0]) * 60) + parseInt(esameArray[1])
    // stessa cosa
    localStorage.setItem("minutiEsame", minutiEsame)
    const mostraTempoEsame = document.getElementById("mostra-tempo-esame")
    mostraTempoEsame.innerText = `Per l'esame gli studenti avranno: ${minutiEsame} minuti.`
})
