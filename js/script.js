/* 1 - Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.


2 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */
var emailList = ["riccardo@gmail.com", "gianni@gmail.com", "franco@gmail.com", "mario@gmail.com", "bosciu@icloud.com"];

var userConfirm = false

var userEmail = prompt("Inserisci la tua email");

for (var i = 0; i < emailList.length; i++) {
    if (userEmail == emailList[i]) {
        i = 999;
        userConfirm = true;
    }
}

if (userConfirm == true) {
    console.log("Puoi accedere");
} else {
    console.log("acccesso vietato");
}