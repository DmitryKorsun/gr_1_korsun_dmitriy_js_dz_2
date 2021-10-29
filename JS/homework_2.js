// ЗАДАНИЕ 1
const METERS_IN_KILOMETR = 1000;
const METERS_IN_INCH = 0.0254;
const PI = 3.14;

let N = prompt('Введите пройденое количество (км):',0);
let D = prompt('Введите диаметр колеса (дм):',0);

N = Number(N);
D = Number(D);

if (isNaN(N)) {
    console.error('Ошибка при введении значения пройденого расстояния!!!');
}else if (isNaN(D)) {
    console.error('Ошибка при введении значения диаметра колеса!!!');
}else if (N == null || N == ' ') {
    console.error('Задано пустое или нулевое значение для пройденого расстояния!!!');
}else if (D == null || D == ' ') {
    console.error('Задано пустое или нулевое значение для диаметра колеса!!!');
}else if (N < 0) {
    console.error('Задано отрицательное значение для пройденого расстояния!!!');
}else if (D  < 0) {
    console.error('Задано отрицательное значение для диаметра колеса!!!');
} else if (N < D) {
    console.error('Диаметр колеса больше чем пройденое расстояние!!!');
}else  {
    N= N * METERS_IN_KILOMETR;
    D= D * METERS_IN_INCH;
    let distanceTraveledWheel = PI * D;
    let oneWheel = N / distanceTraveledWheel ;
    oneWheel = ~~(oneWheel);
    let allWheels = oneWheel * 4;
    alert(`Количество оборотов одного колеса : ${oneWheel}
Количество оборотов всех колес : ${allWheels}`);

}

// ЗАДАНИЕ 2

let days = prompt('Введите значение дней:',0);
days = Number(days);
if (isNaN(days)) {
    console.error('Данные были неверно введены');
} else {

    let mod10 = days % 10;
    let mod100 = days % 100;

    if (mod10 === 1 && mod100 !== 11) {
        alert(`Выведеное значение: ${days} день`);
    } else if (mod10 >= 2 && mod10 <=4 && (mod100 < 10 || mod100 >= 20)) {
        alert(`Выведеное значение: ${days} дня`);
    } else {
        alert(`Выведеное значение: ${days} дней`);
    }
}




