let money,
  time;


money = +prompt("Ваш бюджет на місяць");
time = prompt("Введіть дату у форматі YYYY-MM-DD");


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  incom: [],
  saving: false,
};

/*for (let i = 0; i <2; i++) {
  let a = prompt("Введіть обов'язкову статтю витрат",''),
      b = prompt("У скільки це обійдеться?", '');
  if((typeof(a)) == 'string' && (typeof(a)) != null 
  && (typeof(b)) != null
  && a != '' && b !='' && a.length < 50) {
    appData.expenses[a] = b;
  }
}


let i = 0;
while (i < 2){
let a = prompt("Введіть обов'язкову статтю витрат",''),
      b = prompt("У скільки це обійдеться?", '');
  if((typeof(a)) == 'string' && (typeof(a)) != null 
  && (typeof(b)) != null
  && a != '' && b !='' && a.length < 50) {
    appData.expenses[a] = b;
  }i++
}
*/
let i = 0;
do {
  let a = prompt("Введіть обов'язкову статтю витрат", ''),
    b = prompt("У скільки це обійдеться?", '');
  if ((typeof (a)) == 'string' && (typeof (a)) != null &&
    (typeof (b)) != null &&
    a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
  }
  i++;
} while (i < 2);




appData.moneyPerDay = appData.budget / 30;
alert("Щоденний бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Мінімальний рівень достатку');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
  console.log('Середній рівень достатку');
} else if (appData.moneyPerDay >= 2000) {
  console.log('Високий рівень достатку');
} else {
  console.log('Відбулася помилка');
}