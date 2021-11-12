// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
//     При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
//     При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.


let div = document.createElement('div');
div.setAttribute('class', 'block');
div.setAttribute('style', '    display: flex; flex-direction: row; justify-content: space-around;')
document.body.append(div);

let div_rectangle1 = document.createElement('div');
div_rectangle1.setAttribute('id', 'block_first');
div_rectangle1.setAttribute('style', 'background: green; width: 100px; height: 50px');
div.append(div_rectangle1);

div_rectangle2 = document.createElement('div');
div_rectangle2.setAttribute('id', 'block_second');
div_rectangle2.setAttribute('style', 'background: yellow; width: 200px; height: 100px');
div.append(div_rectangle2);

div_rectangle1.onmouseover = function (event) {
    target = event.target;
    console.log('Ширина :',getComputedStyle(block_first).width);
    console.log('Высота :',getComputedStyle(block_first).height);
}
div_rectangle1.onclick = function translate_text() {
    let text_translate = document.getElementById('block_first').style.backgroundColor;
    switch (text_translate) {
        case 'red':alert('Красный');
        break;
        case 'green':alert('Зеленый');
            break;
        case 'yellow':alert('Желтый');
            break;
        case 'pink':alert('Розовый');
            break;
        case 'blue':alert('Синий');
            break;
    }
}

div_rectangle2.onmouseover = function (event) {
    target = event.target;
    console.log('Ширина :',getComputedStyle(block_second).width);
    console.log('Высота :',getComputedStyle(block_second).height);
}

div_rectangle2.onclick = function () {
    let text_translate = document.getElementById('block_second').style.backgroundColor;
    switch (text_translate) {
        case 'red':alert('Красный');
            break;
        case 'green':alert('Зеленый');
            break;
        case 'yellow':alert('Желтый');
            break;
        case 'pink':alert('Розовый');
            break;
        case 'blue':alert('Синий');
            break;
    }
}