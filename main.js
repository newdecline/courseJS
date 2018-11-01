let money = prompt("Ваш бюджет на месяц", "100");
let time = prompt("Введите дату в формате", "YYYY-MM-DD");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = prompt("Во сколько обойдется ?", "");

let appData = {
  budget: money,
  timeData: time,
  optionalExpenses: {},
  income: [],
  savings: true,
  expenses: {
    answer1: answer2
  }
}

alert(money / 30);


/* 1)Сколько типов данных существует в JS?
Строка,число,булевое значение,объект,null,undefeined
   2)Как вывести информацию в консоль?
console.log();
   3)Какая функция операторов || и &&?
Проверяют операнды и в результате сравнений даёт значение true & false
*/