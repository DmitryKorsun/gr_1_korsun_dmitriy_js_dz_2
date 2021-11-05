function get_order(string) {
    if (typeof(string) !=='string') {
        return false;
    } else {
        string = string.toLowerCase();
        let arrayString = string.split(" ");
        arrayString.sort();
        return console.log(`Слова по алфавиту: ${arrayString}`);
    }
}
let string = 'Ноты акустика гитара';
get_order(string);