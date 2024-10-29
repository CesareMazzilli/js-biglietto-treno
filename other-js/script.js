const pricePerKm = 0.21;
const underageDiscount = 20;
const over65Discount = 65;

//Dati cliente
const userAge = prompt("Dimmi quanti anni hai");  // string | null
const userKm = prompt("Dimmi quanti km vuoi percorrere");  // string | null

console.log(userAge, isNaN(userAge));

//Se almeno uno dei valori di input non è un numero --> messaggio di errore
//ALTRIMENTI
//possiamo fare il calcolo

if (isNaN(userAge) || isNaN(userKm) || userAge === null || userKm === null) {
    console.log("ERRORE");
} else {
    console.log(userAge, userKm);
}

//Esecuzione logica

const userAgeNum = parseInt(userAge); // number
const userKmNum = parseInt(userKm); // number
console.log(userAgeNum, userKmNum);

const basePrice = userKmNum * userAgeNum;
console.log(basePrice, "prezzo base");

let discountPercent;
if (userAgeNum < 18) {
    discountPercent = underageDiscount;
} else if (userAgeNum >= 65) {
    discountPercent = over65Discount;
} else {
    discountPercent = 0;
}

console.log(discountPercent, "sconto da applicare");


const discountValue = (basePrice / 100) * discountPercent;
console.log(discountValue, "sconto da applicare");

const finalPrice = basePrice - discountValue;
console.log(finalPrice, "Prezzo finale");

//Output
const message = `
Abbiamo applicato lo sconto del ${discountPercent}% - ${discountValue.toFixed(2)}€.
Quindi il tuo prezzo finale è ${finalPrice.toFixed(2)}€
`;
console.log(message);
