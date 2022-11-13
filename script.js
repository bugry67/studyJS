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
  incom: [],
  saving: true,
};

function chooseExpenses() {
  for (let i = 0; i <2; i++) {
    let a = prompt("Введіть обов'язкову статтю витрат",''),
        b = prompt("У скільки це обійдеться?", '');
    if((typeof(a)) == 'string' && (typeof(a)) != null 
    && (typeof(b)) != null && a != '' && b !='' && a.length < 50) {
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
chooseExpenses ();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Щоденний бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel () {
  if (appData.moneyPerDay < 100) {
    console.log('Мінімальний рівень достатку');
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Середній рівень достатку');
  } else if (appData.moneyPerDay >= 2000) {
    console.log('Високий рівень достатку');
  } else {
    console.log('Відбулася помилка');
  }
}
detectLevel();

function checkSavings () {
  if(appData.saving == true) {
    let save = +prompt("Яка сума накопичень?"),
        percent = +prompt("Під який відсоток?");

  appData.monthIncome = save / 100 / 12 * percent;
  alert("Дохід за місяць з вашого депозиту: " + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
      let a = +prompt("Введіть кошти на необов'язкову статтю витрат",'');
      if( (typeof(a)) != null && a != '') {
        console.log(a);
        appData.optionalExpenses[i+1] = a;
      } else {
        i = i - 1;
      }
    }
}
chooseOptExpenses();