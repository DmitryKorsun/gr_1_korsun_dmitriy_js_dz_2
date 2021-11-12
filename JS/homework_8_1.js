// Написать код, который будет выполнять 4 действия на странице index.html:
// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
// 4. Удалить все квадраты, и сделать фон страницы черным.
//     Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.
const SQUARE_COUNTS = 10;
const DELAY_MS = 1000;

let style_square = 'background: red; width:50px; height: 50px; margin-bottom:10px;';
let style_square_change = 'background: green; width:100px; height: 100px; margin-bottom:10px;';
let style_square_change_every_third_red = 'background: red; width:100px; height: 100px; margin-bottom:10px;';
let style_square_change_every_third_yellow = 'background: yellow; width:100px; height: 100px; margin-bottom:10px;';
let background_body = 'background: black;'

let div = document.createElement('div');
div.setAttribute('class', 'block-square');
document.body.append(div);

setTimeout(create, DELAY_MS);

function create() {
    let counts_push = 0;
    while (counts_push < SQUARE_COUNTS) {
        div_square = document.createElement('div');
        div_square.setAttribute('class', 'square');
        div_square.setAttribute('style', `${style_square}`);
        div.append(div_square);
        counts_push++;
    }
    setTimeout(change_color_of_size, DELAY_MS);
}

let counts = div.getElementsByClassName('square');

function change_color_of_size() {
    for (let i = 0; i < counts.length; i++) {
        counts[i].setAttribute('style', `${style_square_change}`);
    }
    setTimeout(change_color_second_thirth, DELAY_MS);
}

function change_color_second_thirth() {
    for (i = 0; i < counts.length; i++) {
        if (i % 3 === 0) {
            counts[i].setAttribute('style', `${style_square_change_every_third_red}`);
        } else {
            counts[i].setAttribute('style', `${style_square_change_every_third_yellow}`);
        }
    }
    setTimeout(clear, DELAY_MS);
}

function clear() {
    div.remove();
    document.body.setAttribute('style', `${background_body}`);
}






