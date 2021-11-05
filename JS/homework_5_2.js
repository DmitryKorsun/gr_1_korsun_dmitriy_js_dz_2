function  get_random( arr ) {
    if (typeof(arr) !== 'object'){
        return false;
    }
    else {
        let  random_element = Math.floor(Math.random()* arr.length);
        return alert('Рандомное число массива:'+' '+ random_element);
    }

}

let arr = [1,2,5,3,6,8,4,23,64,8,3,6,7];
get_random(arr);