
let money, time;

function start() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
//start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
					b = prompt("Во сколько обойдется?", '');
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length < 50 ) {
				appData.expenses[a] = b;
			} else {
				i--;
			}
		};
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert('Ежедневный бюджет: ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Что-то пошло не так');
		}
	},
	chechSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
					percent = +prompt('Под какой процент?');
			
			appData.monthIncome = save / 100 / 12 * percent;
			alert('Доход в месяц с депозита: ' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i < 3; i++) {
			let opt = prompt("Введите необязательную статью расходов в этом месяце", '');
			if ( (typeof(opt)) === 'string' && (typeof(opt)) != null && opt != ''  && opt.length < 50 ) {
				appData.optionalExpenses [i] = opt;
			} else {
				i--;
			}
		};
	},
	chooseIncome: function () {
		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
		if (typeof(items) != "string" || items == "" || typeof(items) == null) {
				console.log("Вы ввели некорректные данные или не ввели их вовсе");
		} else {
				appData.income = items.split(", ");
				appData.income.push(prompt("Может что-то еще?"));
				appData.income.sort();
		}
		appData.income.forEach (function (itemmassive, i) {
				alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
		});
	}
};

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}