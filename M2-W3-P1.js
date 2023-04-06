/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let l1 = 3;
let l2 = 5;

function area (l1,l2){
   let a = l1*l2;
   return a;
}
console.log(area(5,3)); */


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1 = 50
let num2 = 50

function crazySum (num1,num2){
    if (num1 !== num2){
        return num1+num2;
    }
    else (num1 === num2)
        let s = ((num1+num2)*3);
        return s;
}
 console.log(crazySum(num1,num2));
 */
/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function crazyDiff(a) {
    let diff = a - 19;
    if (diff > 19) {
        diff *= 3;
    }
    return diff;
}
console.log(crazyDiff(109));
console.log(""); //spazio
 */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let x = 15;

function boundary(x) {
    if ((x >= 20) && (x <= 100)) {
        return "true";
    }
    else if (x === 400) {
        return "true";
    }
    else ((x < 20) && (x > 100))
    return "false";
}

console.log(boundary(x)) */


/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function codify(parola) {
    let contenitore = "";
    for (let index = 0; index < 4; index++) {
        
        contenitore = contenitore.concat(parola[index]);
    }
    if (contenitore !== "code") {
        parola = "code".concat(parola);
        return parola;
    }else{
        return parola;
    }
    
}
console.log(codify("ciao")); */


/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    }
    else{
        return false;
    }
}

console.log(check3and7(13)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function reverseString(string) {
    let x = "";
    for (let index = string.length; index > 0; index--) {
        x = x.concat(string[index-1]);   
    }
    return x;
}
console.log(reverseString("ciao")); */


/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function upperFirst (string){
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word [0].toUpperCase() + word.slice(1)
    }
    return words.join (" ");
}

console.log(upperFirst("ciao mondo umano!")); */

//const capitalize = (str) => {
//    return str.charAt(0).toUpperCase() + str.slice(1);
//}

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* cutString = "Ciao a tutti";
console.log(cutString.substr(1,10)) */

/* function cutString(string) {
    let newWord = "";
    for (i = 0; i < string.length; i++) {
        if (i !== 0 && i !== string.length - 1) {
            newWord = newWord.concat(string[i]);
        }
    }
    return newWord;
}
console.log(cutString("stringa senza la prima e l'ultima lettera"));
console.log("");  */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
/* function giveMeRandom(n) {
    let randomArray = [];
    for (i = 0; i < n; i++) {
        randomArray.push(Math.round(Math.random() * 10));
    }
    return randomArray;
}
console.log(giveMeRandom(14));
console.log(""); */