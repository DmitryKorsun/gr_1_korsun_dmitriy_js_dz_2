// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает их горизонтально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки.
// 5. Удалить все красные квадраты.
//     Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.
$(document).ready(function () {
    const SQUARE_COUNTS = 1000;
    const DELAY_MS = 2000;
    let container = $('<div id="container">');
    $('body').append(container);
    setTimeout(create, DELAY_MS);

    function create() {
        let counts_push = 0;
        while (counts_push < SQUARE_COUNTS) {
            let create_element = $('<div class="square"></div>').css({
                'font-size': '30px',
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                background: 'skyblue',
                width: '70px',
                height: '70px',
                margin: '10px',
            }).appendTo(container);
            counts_push++;
        }
        setTimeout(change_color_of_size, DELAY_MS);
    }

    function change_color_of_size() {
        $(`[class =square]`).css({
            background: 'purple',
            width: '100px',
            height: '100px',
        })
        setTimeout(change_color_second_thirth, DELAY_MS);
    }

    function change_color_second_thirth() {
        let counts = $("[class=square]");
        for (i = 0; i < counts.length; i++) {
            $(counts[i]).text(`${i + 1}`);
        }
        setTimeout(change_triangl, DELAY_MS);
    }

    function change_triangl() {
        let cycle_of_squares = $(`[class =square]`);
        for (i = 0; i < cycle_of_squares.length; i++) {
            if ((i + 1) % 3 === 0) {
                $(cycle_of_squares[i]).toggleClass('square square_red').css({
                    background: 'red',
                });
            }
            if ((i + 1) % 15 === 0) {
                $(cycle_of_squares[i]).toggleClass('square triangl').css({
                    background: 'white',
                    'width': '0',
                    'height': '0',
                    'border-left': '50px solid transparent',
                    'border-right': '50px solid transparent',
                    'border-bottom': '100px solid #78866b',
                });
            }
        }
        setTimeout(clear, DELAY_MS);
    }

    function clear() {
        $('[class = square_red]').remove();
    }
});




