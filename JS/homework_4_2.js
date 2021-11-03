let array = [];

array = get_array(array);

function get_array(array) {
    for (i = 500; i <= 800; i++) {
        if (i%2 ===0) {
            array.push(i);
        }
    }
    return array;
}
console.log(array);
alert(`Вывод четных элементов массива: ${array}`);

