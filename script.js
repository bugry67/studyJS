let money,
  time;

function start() {
  money = +prompt("Ваш бюджет на місяць");
  time = prompt("Введіть дату у форматі YYYY-MM-DD");

  // isNaN  повертає true коли не цифри
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на місяць");
  }
}
start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  chooseExpenses: function() {
    for (let i = 0; i <2; i++) {
      let a = prompt("Введіть обов'язкову статтю витрат",''),
          b = prompt("У скільки це обійдеться?", '');
      if((typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Щоденний бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function  () {
      if (appData.moneyPerDay < 100) {
        console.log('Мінімальний рівень достатку');
      } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log('Середній рівень достатку');
      } else if (appData.moneyPerDay >= 2000) {
        console.log('Високий рівень достатку');
      } else {
        console.log('Відбулася помилка');
      }
    },
    checkSavings: function() {
      if(appData.saving == true) {
        let save = +prompt("Яка сума накопичень?"),
        percent = +prompt("Під який відсоток?");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Дохід за місяць з вашого депозиту: " + appData.monthIncome);
      }
    },
    chooseOptExpenses: function (){
      for (let i = 0; i < 3; i++) {
        let a = +prompt("Введіть кошти на необов'язкову статтю витрат",'');
        if( (typeof(a)) != null && a != '') {
          console.log(a);
          appData.optionalExpenses[i+1] = a;
        } else {
          i = i - 1;
        }
      }
    },
    chooseIncome: function() {
      for(let el = 0; el < 1; el++) {
        let items = prompt("Що принесе додатковий дохід? (Перелічіть через кому)", "");
        if(typeof(items) == "string" && items != "" && typeof(items) != null) {
          appData.income = items.split(', ');
          appData.income.push(prompt("Можливо ще щось?"));
          appData.income.sort();

        }else {
          el = el - 1;
        }
      } 
      let message = "Способи додаткового заробітку:\n";
      
      appData.income.forEach(function(item, i) {
        message += `${i + 1}  ${item}\n`;
      })
      alert(message);
    }
}

