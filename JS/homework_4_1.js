let array = [-10, -9, -8, -6, 0, 1, 2, 3, 4, 5, -85, 7];

let minimal = get_min(array);

function get_min( array ) {
    let minimal = Math.min.apply(null, array);
    return minimal;
}

alert(`Минимальное число массива: ${minimal}`);