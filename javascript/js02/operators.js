/* ---------------------------------- */
/*              OPERATORS             */
/* ---------------------------------- */

let a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);

// MODULUS

let c = 3;
console.log(a % c);

// EXAMPLE

// let d = +prompt("enter a number");

// if (d % 2 === 0) {
//     console.log("your number is even");
// } else {
//     console.log("your number is odd");
// }

// EXAMPLE2

let sure = 225;

let saat = parseInt(sure / 60);

console.log(saat);

let dakika = sure % 60;

console.log(`${sure} dakika ${saat} ${dakika} dakikadir`);

// increment decrement

let d = 3;

// pre increment
console.log(++d);
// post increment
console.log(d++);
console.log(d);

// assigment operators

let h = 10;

let i = 2;

let j = i;
console.log(j);

i = 3;

console.log(j); // nin degeri i degistigi icin degismez

// console.log(h -= i);
// console.log(h*=i);
// console.log((h /= i));




