const MAX_COUNT_ATTEMPT = 7;
let min = 0;
let max = 100;
let attempt = 0;
do {
    _number = min + ( max - min ) / 2;
    _number = parseInt(_number);
    let answer = confirm('Ваше число больше числа ' + _number + '?');
    attempt++;
    if (answer) {
        min =_number;
    } else {
        max = _number;
    }
}while ((max-min > 1) || attempt < MAX_COUNT_ATTEMPT);
alert('Результат:'+ ' ' + ~~(max));

// const MAX_COUNT_ATTEMPT = 7;
// let max = 101;
// let randomValue = Math.floor(Math.random() * max);
// console.log (randomValue);
// let  attempt = 0 ;
//  for (i=0; i <= MAX_COUNT_ATTEMPT; i++){
//    let variantNumbet = prompt('Введите число которое мог загадать компьютер',0);
//    variantNumbet = Number (variantNumbet);
//    if (variantNumbet > randomValue) {
//     alert(`Число загадное компьютером меньше чем указаное вами!
//     Оставшееся число попыток равно: ${MAX_COUNT_ATTEMPT-attempt}`);
//    } else if (variantNumbet < randomValue){
//     alert(`Число загадное компьютером больше чем указаное вами
//         Оставшееся число попыток равно: ${MAX_COUNT_ATTEMPT-attempt} `);
//    }else {
//     alert(`Вы угадали число с ${i} -ой попытки`);
//     break
//    }
//    attempt +=1;
//    if (attempt >= MAX_COUNT_ATTEMPT){
//     alert(`Вы исчерпали свои попытки!`);
//    }
//  }