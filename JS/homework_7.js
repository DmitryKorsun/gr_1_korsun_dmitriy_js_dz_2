// Ч1
// С помощью функции-конструктора, написать создание объекта Калькулятор.
//     Функция конструктор принимает в качестве единственного параметра название калькулятора.
//     Ч2
// Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
//     В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
//     Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.
//     Ч3
// Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
//     Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
// Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.

let date = new Date();
log_date = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();


let calculator = new Calculator('Калькулятор');
calculator.operations.sum(2, 2, 23);
calculator.operations.sum(3, 3);
calculator.operations.mul(2, 6);
calculator.operations.sub(10, 4);
calculator.operations.div(10, 2);
calculator.log.display_log();
calculator.log.log_clear();

let calculator_2 = new Calculator('Калькулятор 2');
calculator_2.operations.sum(2, 2, 23, 302);
calculator_2.operations.mul(2, 6, 3);
calculator_2.operations.sub(10, 2);
calculator_2.operations.div(10, 5);
calculator_2.log.display_log();
calculator_2.log.log_clear();


function Calculator(name) {
    this.name = name;

    let log_list = [];
    this.log = {
        display_log: function () {
            console.log(log_list);
            for (let list = 0; list <= log_list.length - 1; list++) {
                console.log(log_list[list]);
            }
        },
        log_clear: function () {
            log_list = [];
            console.log(`Лог "${name}" очищен`, log_list);
        }
    }
    this.operations = {
        sum: function (...sum_arrg) {
            let action_name = 'Сложение';
            let sum = sum_arrg.slice(',');
            let result = 0;
            for (let sum_round = 0; sum_round <= sum.length - 1; sum_round++) {
                if (isNaN(sum[sum_round])) {
                    result = null;
                    break;
                } else {
                    result += sum[sum_round];
                }
            }
            log_list.push(name + ' ' + log_date + ' ' + action_name + ' = ' + result + ',' + '(' + sum_arrg + ')');
        },
        sub: function (subtrahend, subtractor) {
            let action_name = 'Вычитание';
            if (isNaN(subtrahend) || isNaN(subtractor)) {
                return null;
            } else {
                result = subtrahend - subtractor;
            }
            log_list.push(name + ' ' + log_date + ' ' + action_name + ' = ' + result + ',' + '(' + subtrahend + ',' + subtractor + ')');
        },
        mul: function (...mul_arrg) {
            let action_name = 'Умножение';
            let mul = mul_arrg.slice(',');
            let result = 1;
            for (let mul_round = 0; mul_round <= mul.length - 1; mul_round++) {
                if (isNaN(mul[mul_round])) {
                    result = null;
                    break;
                } else {
                    result *= mul[mul_round];
                }
            }
            log_list.push(name + ' ' + log_date + ' ' + action_name + ' = ' + result + ',' + '(' + mul_arrg + ')');
        },
        div: function (dividend, divider) {
            let action_name = 'Деление';
            if (isNaN(dividend) || isNaN(divider)) {
                return null;
            } else {
                result = dividend / divider;
            }
            log_list.push(name + ' ' + log_date + ' ' + action_name + ' = ' + result + ',' + '(' + dividend + ',' + divider + ')');
        }
    }


}
