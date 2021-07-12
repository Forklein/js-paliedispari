console.log('Ciao Peppe!')

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var btnGenerate = document.getElementById('generate');
var resultDisplay = document.getElementById('result');
var wordDisplay = document.getElementById('word');

function isPal(parola) {
    var splitWord = parola.split('');
    var reverseWord = splitWord.reverse();
    var invertWord = reverseWord.join('');
    if (invertWord === parola) {
        return true;
    } else {
        return false;
    }
}

btnGenerate.addEventListener('click', function () {
    var wordElement = wordDisplay.value.toLowerCase();
    while (!wordElement || wordElement.trim() === '' || !isNaN(wordElement)) {
        resultDisplay.innerText = 'Error!';
    };
    if (isPal(wordElement)) {
        resultDisplay.innerText = 'La parola inserita è palindroma';
    } else {
        resultDisplay.innerText = 'La parola inserita non è palindroma';
    }
});







/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto. */

