console.log("hello world");

// STRING
let str1 = "haii world";
let str2 = "hello world";
let str3 = `merhaba ${3 + 5}`;

let str4 = new String("Merhaba dunya");

console.log(str3);
console.log(str2);
console.log(str1);
console.log(str4);

console.log(str1[0]);

// NUMBER
let num1 = 1;
let num2 = 1.2;
let num3 = 0.12354124;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

// BOOLEAN

// true false

console.log(2 < 3);
console.log(3 < 2);

console.log(typeof true);
console.log(typeof false);

// FALSY DEGERLER
// 0 , '', null , undefined

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));

// NULL & undefined & NaN

console.log(typeof null);

let n = null;
console.log(Boolean(n));

console.log(null + 5);

let u;

console.log(Boolean(u));
console.log(u - 5);

console.log(null == undefined);

console.clear();

console.log(null === null);
console.log(undefined === undefined);
console.log(NaN === NaN);

console.log(Boolean(NaN));

// SYMBOLS
// objelerin property isimleri kullanilabilir
// unique degerlerdir

const sym1 = Symbol("Hello");
const sym2 = Symbol("Hello");

console.log(sym1, sym2);

console.log(sym1 == sym2);

/* ---------------------------------- */
/*           TYPE CONVERSION          */
/* ---------------------------------- */


// numa cevırme

let a = 10;
let b = "5";

console.log("toplam:", a + b);
console.log("cikarma:", a - b);
console.log("carpma:", a * b);
console.log("bolme:", a / b);

console.log(a + Number(b));

let e = "1234.453";

console.log(parseInt(e));
console.log(parseFloat(e));


// STRINGE CEVIRME

let f = 123.456
let g = '123.456'

let h = f.toString()

console.log(h)

console.log(f.toString())

// UNARY + 

let i = + g
console.log(i)
console.log(typeof i)

// UNARY EX

// const age1 =prompt('enter your age')
// console.log(typeof age1)

// const age2 = +prompt('enter your age')
// console.log(typeof age2)