
const maas = +prompt('Maasinizi giriniz')
const borc = +prompt('borcunuzu giriniz')

if ((10 * maas) >= (5000 + borc)) {
    console.log('kredi cekebilirsiniz');
} else{
    console.log('kredi cikmadi');
}