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

var emailInput = document.getElementById("email-input");

var verifyMessage = document.getElementById("root");

var dice = document.getElementById("dice");

var diceOutput = document.getElementById("root-2");

var userConfirm = false;

var numeroScelto = false;


function VerificaEmail() {
    userEmail = emailInput.value;
    for (var i = 0; i < emailList.length; i++) {
        if (userEmail == emailList[i]) {
            i = emailList.length + 1;
            userConfirm = true;
        }
    }

    if (userConfirm == true) {
        verifyMessage.innerHTML = "Sei dentro!"
    } else {
        verifyMessage.innerHTML = "Sei fuori!";
    }
}

function Prova() {
    var x = Math.floor(((Math.random() * 6)) + 1);
    if (numeroScelto == false) {
        if (x == 1) {
            dice.className = "fas fa-dice-one fa-7x";
            numeroScelto = true;
            diceOutput.innerHTML = "E' uscito il numero " + x + "!";
        } else if (x == 2) {
            dice.className = "fas fa-dice-two fa-7x";
            numeroScelto = true;
            diceOutput.innerHTML = "E' uscito il numero " + x + "!";
        } else if (x == 3) {
            dice.className = "fas fa-dice-three fa-7x";
            numeroScelto = true;
            diceOutput.innerHTML = "E' uscito il numero " + x + "!";
        } else if (x == 4) {
            dice.className = "fas fa-dice-four fa-7x";
            numeroScelto = true;
            diceOutput.innerHTML = "E' uscito il numero " + x + "!";
        } else if (x == 5) {
            dice.className = "fas fa-dice-five fa-7x";
            numeroScelto = true;
            diceOutput.innerHTML = "E' uscito il numero " + x + "!";
        } else if (x == 6) {
            dice.className = "fas fa-dice-six fa-7x";
            numeroScelto = true;
            diceOutput.innerHTML = "E' uscito il numero " + x + "!";
        }
    }
}