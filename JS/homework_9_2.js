// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
//     При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
//     При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

$(document).ready(function () {
    let container = $('<div id="container">').css({
        display: 'flex',
        'justify-content': 'center',
    })
    $('body').append(container);
    let rectangle = $('<div id="rectangle"></div>').css({
        'background': 'green',
        width: '320px',
        height: '70px',
        margin: '10px',
    })
    let rectangle2 = $('<div id="rectangle2"></div>').css({
        'background': 'skyblue',
        width: '200px',
        height: '100px',
        margin: '10px',
    })
    $(container).append(rectangle);
    $(container).append(rectangle2);

    $('#rectangle').on({
        mouseenter: function () {
            console.log('Ширина :', $('#rectangle').width());
            console.log('Ширина :', $('#rectangle').height());
        },
        click: function () {
            let text_translate = $('#rectangle').css('backgroundColor');
            switch (text_translate) {
                case 'rgb(0, 128, 0)':
                    alert('Зеленый');
                    break;
                case 'rgb(135, 206, 235)':
                    alert('Голубой');
                    break;
            }
        }
    })
    $('#rectangle2').on({
        mouseenter: function () {
            console.log('Ширина :', $('#rectangle2').width());
            console.log('Ширина :', $('#rectangle2').height());
        },
        click: function () {
            let text_translate = $('#rectangle2').css('backgroundColor');
            switch (text_translate) {
                case 'rgb(0, 128, 0)':
                    alert('Зеленый');
                    break;
                case 'rgb(135, 206, 235)':
                    alert('Голубой');
                    break;
            }
        }
    })
});
