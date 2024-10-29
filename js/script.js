let km = prompt('Quanti km devi percorrere?');
console.log(km);

let age = prompt('Qual è la tua età?');
console.log(age);

let fullPrice = km * 0.21;
console.log(fullPrice);

let finalPrice;

if (age > 65) {
    finalPrice = (fullPrice * 0.6).toFixed(2);
}
else if (age < 18){
    finalPrice = (fullPrice * 0.8).toFixed(2);
}
else{
    finalPrice = fullPrice.toFixed(2);
}

console.log(finalPrice);
