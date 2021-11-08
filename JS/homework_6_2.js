//  Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, если оно задано, иначе посчитать количество дней от текущей даты

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOURS = MS_MINUTE * 60 ;
const MS_DAY = MS_HOURS * 24;


function get_count_days(date){
    if (date!= null && date instanceof Date) {
            date_first = new Date(date);
            console.log(date_first);
    } else {
        date_first = new Date();
    }
    let result = 0;
    date_new_year = new Date(2021, 11, 31);
    console.log(date_new_year);
    result = Math.floor((date_new_year - date_first)/MS_DAY);
    return `До нового года: ${result} дней`;
}

alert(get_count_days( new Date('11/11/2021')));