function get_max (arr) {
    if (typeof(arr) !=='object' && arr.length > 0) {
        return false;
    }else {
        max_element = -Infinity;
        for (element of arr) {
            if (element > max_element) {
                max_element = element;
            }
        }
        return alert(`Максимальное число массива: ${max_element}`);
    }
}

let arr =[1, 2, 8, 10, 5, 2, 11, 8];
get_max(arr);