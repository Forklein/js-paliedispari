console.log('Ciao Peppe!')

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var btnGenerate = document.getElementById('generate');
var resultDispaly = document.getElementById('result');
var wordDisplay = document.getElementById('word');

function isPal(wordElement) {
    var wordElement = wordDisplay.value.toLowerCase();
    var splitWord = wordElement.split('');
    var reverseWord = splitWord.reverse();
    var invertWord = reverseWord.join('');
    if (invertWord === wordElement) {
        resultDispaly.innerText = 'La parola inserita è palindroma';
    }
    else {
        resultDispaly.innerText = 'La parola inserita non è palindroma';
    }
}
btnGenerate.addEventListener('click', isPal)







/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto. */

