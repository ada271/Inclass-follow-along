/* ---------------------------------- */
/*              DATATYPES             */
/* ---------------------------------- */

sayi = 45

console.log(typeof sayi)

/* ---------------------------------- */
/*        PRIMITIVE DATA TYPES        */
/* ---------------------------------- */

// tek bir deger tutar
// number,string, null, undefined, boolean

// BigInt data type cok buyuk sayilar icin kullanilir
// number -+ 2 uzeri 53'e kadar tanimlidir

let x = 34
let y = 89.34235

console.log(typeof x)
console.log(typeof y)

// math methodu ile matematiksel islemler tanimlanabilir

const pi=Math.PI
console.log(pi)

// dairenin cevresi

let r = 6
let cevre = 2 * pi * r
console.log(cevre)

// dairenin alani
let alan = pi * r * r
console.log(alan)

// yuvarlama methodlari
// round = normal yuvarlama
// ceil = bir ust tamsayiya
// floor = alt tamsayiya 
// trunc tam sayi kismini alir
console.log(Math.round(alan))
console.log(Math.ceil(alan))
console.log(Math.floor(alan))
console.log(Math.trunc(alan))

// toFixed kac basamak gostercegimizi secer
console.log(alan.toFixed(4))

// Math.max verilen degerlerin en buyugunu dondurur

console.log(Math.max(25,53,43566,57))

// Math.min verilen degerlerden en kucugunu dondurur

console.log(Math.min(25,53,43566,57))

// RANDOM rastgele sayi uretir
console.log(Math.random())

// chaining methodu

let rastgeleSayi = Math.random()
console.log(rastgeleSayi)
let duzenlenmisSayi = rastgeleSayi.toFixed(2)
console.log(duzenlenmisSayi)

// math random ile istenilen degerler arasinda bir sayi uretmek icin
let rNumber=Math.random() * 100
console.log(rNumber)

// math pow kuvvetini almak icin 
console.log(Math.pow(5,3))
console.log(3**4)

// Math.sqrt karekok alir

console.log(Math.sqrt(25))

// Math.cbrt kupkok
console.log(Math.cbrt(64))