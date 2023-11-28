/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

arr = new Array(23,12)
len = arr.length
highest = arr[0]
 
for (i=1;i<len;i++) {
	if (arr[i]>highest) {
		highest = arr[i]
	}
}
 
console.log("Il numero più alto è", highest);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number1 = 6
if(number1 === 5) {
console.log("il numero è uguale a 5") }
else{
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let number2 = 5
if(number2 % 10 ===0 ) {
console.log("divisibile per 5") }
else{
  console.log("non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let number3 = 8
let number4 = 12
if(number3 || number4 === 8) {
console.log("uno dei due numeri è uguale a 8") }
 else if (number3 - number4 === 8){
  console.log("Il risultato della sottrazione tra i due numeri è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCard = 30
let cost = 10
if(totalShoppingCard > 50) {
console.log("Complimenti, hai diritto alla spedizione gratuita!") }
else{
  console.log("la spedizione ha un costo fisso pari a " +cost+ " euro")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let discountValue = 20
const calculateDiscount = (totalShoppingCard, percentage) => {
  discountValue - (totalShoppingCard / 20) * percentage
  finalPrice - totalShoppingCard - discountValue
  return finalPrice.toFixed(2)
};
console.log(totalShoppingCard)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numbers = [63, 28, 72, 15]
numbers.sort()
console.log(numbers)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof 42)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isDisparo(num){
  let risultato = num % 2;
  if (risultato == 0){
    return false;
  }else if(risultato == 1){
    return true;
  }else{
    alert("Non è un numero intero");
    return "";
  }
}

console.log(isDisparo(5));

// /* ESERCIZIO 10
  // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 10
  if (val < 15) {
      console.log("Meno di 15");
    } else if (val < 20) {
      console.log("Meno di 20");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const Numbers = []
Numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log("Numbers", Numbers)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

Numbers.splice(9, 0, 100)
console.log("Numbers", Numbers)
