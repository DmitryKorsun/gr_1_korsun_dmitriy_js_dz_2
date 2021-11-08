// Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.

function get_count_work_days(date1, date2) {
    if (date1 instanceof Date && date2 instanceof  Date){
        let counter = 0;
        let days_counter = date1;
        while (days_counter <= date2) {
            let date_week = days_counter.getDay();
            if (!((date_week == 0) || (date_week == 6))) {
                counter++;
            }
                days_counter.setDate(days_counter.getDate() + 1);
        }
        return `Количество рабочих дней равно: ${counter}`;
    } else  {
        return false;
    }
}

alert(get_count_work_days(new Date('11/01/2021'), new Date('11/07/2021')));

