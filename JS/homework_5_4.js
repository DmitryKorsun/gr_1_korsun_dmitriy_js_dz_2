function get_sum_points(points) {

    let result_sum = 0;

    for (let key in points) {
        result_sum += points[key];
    }

    return alert(`Сумма оценок: ${result_sum}`);
}

function get_min_max_points(points) {
    let arr = Object.keys(points).map(function (key) {
        return points[key];
    })

    let max_element = Math.max.apply(null, arr);
    let min_element = Math.min.apply(null, arr);

    let get_max_person = obj => {
        let max_value = Math.max.apply(null, Object.values(obj));
        return Object.keys(points).filter(key => points[key] === max_value);
    }

    let get_min_person = obj => {
        let min_value = Math.min.apply(null, Object.values(obj));
        return Object.keys(points).filter(key => points[key] === min_value);
    }

    alert(`Максимальная оценка у ${get_max_person(points)} равная : ${max_element}
     Минимальная оценка у ${get_min_person(points)} равная : ${min_element}`);
}

let points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
};

get_sum_points(points);
get_min_max_points(points);