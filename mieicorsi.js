console.log('SPESOMETRO')
const materiaEsame = document.querySelector('#esame-materia')
const votoEsame = document.querySelector('#esame-voto')
const cancellaBtn = document.querySelector('#btn-cancella')
const aggiungiBtn = document.querySelector('#btn-aggiungi')
const esamiList = document.querySelector('#list-esami')
const mediaEsame = document.querySelector('#esame-media')

const alertController = document.querySelector('ion-alert-controller')

let mediaTotalepar = 0
let mediaTotale = 0
let esamiInseriti = 0

const cancella = () =>{
    materiaEsame.value = ''
    votoEsame.value = ''
}

cancellaBtn.addEventListener('click', cancella)
aggiungiBtn.addEventListener('click',() =>{
    // console.log('aggiungi spesa')
    const materiaInserita = materiaEsame.value
    const votoInserito = votoEsame.value
    if(votoInserito <= 0 || votoInserito >=6
        || votoInserito.trim().lenght <= 0
        || materiaInserita.trim().lenght <= 0
        ){
            alertController.create({
                message: 'Perfavore inserisci valori validi',
                header: 'valori non validi',
                buttons: ['Ok']
            }).then(alertElem => {
                alertElem.present()
            })
            return
        }
    console.log('Materia: ', materiaInserita, votoInserito)
    const nuovoElem = document.createElement('ion-item')
    nuovoElem.textContent = materiaInserita + ": " + votoInserito
    esamiInseriti++

    esamiList.appendChild(nuovoElem)
    // + su variabile stringa la trasforma in un numero
    mediaTotalepar += +votoInserito 
    mediaTotale = (mediaTotalepar/esamiInseriti)
    console.log('Totale', mediaTotale)
    mediaEsame.textContent = mediaTotale
    cancella()
})