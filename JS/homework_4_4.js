const GAME_CITIES_ATTEMPTS = 10;
gameCities();

function gameCities() {
    let counts = 0;
    let newCity = prompt('Введите город:');

    if (!newCity) {
        alert('Вы не ввели город!!!');
    } else {
        newCity = newCity.toLowerCase();
        while (true) {
            if (counts !== GAME_CITIES_ATTEMPTS) {
                let secondCity = prompt(`Прошлый город: ${newCity}. Введите следующий город!`);
                if (!secondCity) {
                    alert('Вы не ввели город!!!');
                } else {
                    secondCity = secondCity.toLowerCase();
                    if (newCity[newCity.length - 1] === 'ь') {
                        if (newCity[newCity.length - 2] == secondCity[0]) {
                            newCity = secondCity;
                            counts++;
                        } else {
                            alert(`Игра окончена. Ваши очки: ${counts}`);
                            break;
                        }
                    } else if (newCity[newCity.length - 1] === secondCity[0]) {
                        newCity = secondCity;
                        counts++;
                    } else {
                        alert(`Игра окончена. Ваши очки: ${counts}`);
                        break;
                    }
                }
            } else {
                alert(`Игра окончена. Ваши очки: ${counts}`);
                break;
            }
        }
    }
}