// Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты. Например: get_day(’27-11-1988’) должно вернуть «воскресенье»

const LIST_DAY = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

function get_day(date) {
    if(date instanceof Date) {
        switch (date.getDay()) {
            case 0:return 'Воскресенье';
            case 1:return 'Понедельник';
            case 2:return 'Вторник';
            case 3:return 'Среда';
            case 4:return 'Четверг';
            case 5:return 'Пятница';
            case 6:return 'Суббота';
        }
        return alert(LIST_DAY[date.getDay()]);
    } else  {
        return false;
    }
}
alert(get_day(new Date('11/27/1988')));