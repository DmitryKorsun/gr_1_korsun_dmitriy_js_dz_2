let firstNumber = prompt('Введите число начала промежутка:',0);
let secondNumber = prompt('Введите число конца промежутка:',0);

firstNumber = Number (firstNumber);
secondNumber = Number (secondNumber);

let sumNumber = 0;
let  amountNumber = 0;

if (isNaN(firstNumber) || isNaN(secondNumber)){
    console.error('Введено неправильное значение!');
}else if (secondNumber >= firstNumber) {
    for (let i = firstNumber; i <= secondNumber ; i++) {
        if ( i%6 == 0) {
            sumNumber += i;
            amountNumber++;
        } else {
            firstNumber++;
        }
    }
} else {
    for (let i = secondNumber; i <= firstNumber ; i++) {
        if ( i%6 == 0) {
            sumNumber += i;
            amountNumber++;
        } else {
            secondNumber++;
        }
    }
}

alert(`Количество чисел кратных 6: ${amountNumber}
Сумма чисел кратных 6: ${sumNumber}`);