
const maas = +prompt('Maasinizi giriniz')
const borc = +prompt('borcunuzu giriniz')

if ((10 * maas) >= (5000 + borc)) {
    console.log('kredi cekebilirsiniz');
} else{
    console.log('kredi cikmadi');
}

const num1 = +prompt('enter your first number')
const operator = prompt('enter an operator')
const num2 = +prompt('enter your second number')

let result

switch (operator) {
    case '+':
            result = num1 + num2
        break;
    case '-':
            result = num1 - num2
        break;
    case '*':
            result = num1 * num2
        break;
    case '/':
            result = num1 / num2
        break;

}


console.log('result is' + result)