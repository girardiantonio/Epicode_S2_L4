/**
 * REGOLE
 * - Tutte le risposte devono essere scritte in JavaScript
 * - Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
 * - Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
 * - Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
 * - Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
 *
 * @format
 */

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  area = l1 * l2;
  console.log("L'area del rettangolo è:", area);
}

area(20, 30); // L'area del rettangolo è: 600

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  num1 = Math.floor(num1);
  num2 = Math.floor(num2);
  let sum = num1 + num2;

  if (num1 === num2) {
    let multipliedSum = sum * 3;
    console.log(
      "I numeri sono uguali! La somma moltiplicata per tre è: ",
      multipliedSum
    );
  } else {
    console.log("La somma dei numeri è: ", sum);
  }
}

crazySum(2, 3); // La somma dei numeri è:  5
crazySum(3, 3); // I numeri sono uguali! La somma moltiplicata per tre è:  18

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
  let diff = x - 19;

  if (x > 19) {
    let multipliedDiff = diff * 3;
    console.log(
      "I numeri fornito è maggiore di 19! La differenza moltiplicata per tre è: ",
      multipliedDiff
    );
  } else {
    console.log("La differenza dei numeri è: ", diff);
  }
}

crazyDiff(4); // La differenza dei numeri è:  -15
crazyDiff(19); // La differenza dei numeri è:  0
crazyDiff(23); // I numeri fornito è maggiore di 19! La differenza moltiplicata per tre è:  12

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    console.log(
      "I numero è compreso tra 20 e 100 oppure è uguale a 400: ",
      true
    );
  } else {
    console.log(
      "I numero non è compreso tra 20 e 100 oppure è uguale a 400: ",
      false
    );
  }
}

boundary(4); // I numero non è compreso tra 20 e 100 oppure è uguale a 400:  false
boundary(45); // I numero è compreso tra 20 e 100 oppure è uguale a 400:  true
boundary(400); // I numero è compreso tra 20 e 100 oppure è uguale a 400:  true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  if (string.startsWith("EPICODE") || string.startsWith("epicode")) {
    console.log("La parola inserita comincia con EPICODE: ", string);
  } else {
    console.log(
      "La parola inserita non comincia con EPICODE: ",
      "EPICODE " + string
    );
  }
}

epify("epicode ciao come stai"); // La parola inserita comincia con EPICODE:  epicode ciao come stai
epify("ciao come stai"); // La parola inserita non comincia con EPICODE:  EPICODE ciao come stai

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(npos) {
  if (npos > 0 && (npos % 3 === 0 || npos % 7 === 0)) {
    console.log("Il numero è un multiplo di 3 o di 7.", npos);
  } else {
    console.log("Il numero non è un multiplo di 3 o di 7.", npos);
  }
}

check3and7(9); // Il numero è un multiplo di 3 o di 7. 9
check3and7(14); // Il numero è un multiplo di 3 o di 7. 14
check3and7(20); // Il numero non è un multiplo di 3 o di 7. 20

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  let chars = string.split(""); // converto la stringa in array

  let verChars = chars.reverse(); // inverto l'ordinedegli elementi nell'array

  let reversedString = verChars.join(""); // unisco gli elementi invertiti

  console.log(reversedString);
}

reverseString("EPICODE"); // EDOCIPE

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  let words = string.split(" "); // Divido la stringa in un array di parole

  // Itero attraverso ogni parola e rendo maiuscola la prima lettera
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfWord = word.slice(1);
    words[i] = firstLetter + restOfWord;
  }

  let modifiedString = words.join(" ");

  console.log(modifiedString);
}

upperFirst("hello world"); // Hello World


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  let newString = string.slice(1, -1);
  console.log(newString);
}

cutString("EPICODE"); // PICOD

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let ranNumbers = [];

  for (let i = 0; i < n; i++) {
    let ranNumber = Math.floor(Math.random() * 11);
    ranNumbers.push(ranNumber);
  }
  console.log(ranNumbers);
}

giveMeRandom(3); // [2, 7, 3]
giveMeRandom(5); // [7, 2, 10, 4, 3]
giveMeRandom(10); // [5, 9, 0, 10, 2, 7, 4, 4, 0, 6]
