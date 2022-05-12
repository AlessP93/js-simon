// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


//1. Visualizzare in pagina 5 numeri casuali creati con un ciclo, mostrando un alert
let randomNumber = [];
let createRandom;
for (let i = 0; i < 5; i++) {
   let createRandom = (Math.floor(Math.random() * 50) + 1);
   createRandom.push(randomNumber.length);
}


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        let userNumber = Number(prompt("Ricorda e inserisci i numeri apparsi poco prima"));
    }
}, 3000);

// Dopo il software dice quanti e quali dei numeri da indovinare sono stati individuati.
let control;
if (randomNumber === userNumber){
    alert("Hai indovinato il numero!");
} else 
    alert("Hai sbaglito numero riprova!");
