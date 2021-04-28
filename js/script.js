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


var diceUser = document.getElementById("dice-user");

var diceUserOutput = document.getElementById("root-2");

var dicePc = document.getElementById("dice-pc");

var dicePcOutput = document.getElementById("root-3");

var userConfirm = false;

var numeroScelto = false;

var numeroSceltoPc = false;

var gameOver = false;


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

function GiocoDadiUser() {
    userNumb = Math.floor(((Math.random() * 6)) + 1);
    if (numeroScelto == false) {
        if (userNumb == 1) {
            diceUser.className = "fas fa-dice-one fa-7x";
            numeroScelto = true;
            diceUserOutput.innerHTML = "E' uscito il numero " + userNumb + "!";
        } else if (userNumb == 2) {
            diceUser.className = "fas fa-dice-two fa-7x";
            numeroScelto = true;
            diceUserOutput.innerHTML = "E' uscito il numero " + userNumb + "!";
        } else if (userNumb == 3) {
            diceUser.className = "fas fa-dice-three fa-7x";
            numeroScelto = true;
            diceUserOutput.innerHTML = "E' uscito il numero " + userNumb + "!";
        } else if (userNumb == 4) {
            diceUser.className = "fas fa-dice-four fa-7x";
            numeroScelto = true;
            diceUserOutput.innerHTML = "E' uscito il numero " + userNumb + "!";
        } else if (userNumb == 5) {
            diceUser.className = "fas fa-dice-five fa-7x";
            numeroScelto = true;
            diceUserOutput.innerHTML = "E' uscito il numero " + userNumb + "!";
        } else if (userNumb == 6) {
            diceUser.className = "fas fa-dice-six fa-7x";
            numeroScelto = true;
            diceUserOutput.innerHTML = "E' uscito il numero " + userNumb + "!";
        }
        document.getElementById("invisible").style.visibility = "visible"
    }
}

function GiocoDadiPc() {
    var pcNumber = Math.floor(((Math.random() * 6)) + 1);
    if (numeroSceltoPc == false) {
        if (pcNumber == 1) {
            dicePc.className = "fas fa-dice-one fa-7x";
            numeroSceltoPc = true;
            dicePcOutput.innerHTML = "E' uscito il numero " + pcNumber + "!";
        } else if (pcNumber == 2) {
            dicePc.className = "fas fa-dice-two fa-7x";
            numeroSceltoPc = true;
            dicePcOutput.innerHTML = "E' uscito il numero " + pcNumber + "!";
        } else if (pcNumber == 3) {
            dicePc.className = "fas fa-dice-three fa-7x";
            numeroSceltoPc = true;
            dicePcOutput.innerHTML = "E' uscito il numero " + pcNumber + "!";
        } else if (pcNumber == 4) {
            dicePc.className = "fas fa-dice-four fa-7x";
            numeroSceltoPc = true;
            dicePcOutput.innerHTML = "E' uscito il numero " + pcNumber + "!";
        } else if (pcNumber == 5) {
            dicePc.className = "fas fa-dice-five fa-7x";
            numeroSceltoPc = true;
            dicePcOutput.innerHTML = "E' uscito il numero " + pcNumber + "!";
        } else if (pcNumber == 6) {
            dicePc.className = "fas fa-dice-six fa-7x";
            numeroSceltoPc = true;
            dicePcOutput.innerHTML = "E' uscito il numero " + pcNumber + "!";
        }
    }
    if (numeroScelto == true && numeroSceltoPc == true && gameOver == false) {
        if (userNumb > pcNumber) {
            dicePcOutput.innerHTML += "<div class='color-red'>Complimenti, hai vinto!</div>";
        } else if (userNumb == pcNumber) {
            dicePcOutput.innerHTML += "<br> Pareggio!";
        } else {
            dicePcOutput.innerHTML += "<br> Purtroppo hai perso."
        }
        gameOver = true;
    }
}