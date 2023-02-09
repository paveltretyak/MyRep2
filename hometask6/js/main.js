'use strict';

let startButton = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
let expensesInput = document.getElementsByClassName('expenses-item');
let expButton = document.getElementsByTagName('button')[0];
let utvButton = document.getElementsByTagName('button')[1];
let rassButton = document.getElementsByTagName('button')[2];
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');



let money;
let time;

expButton.disabled = true;
utvButton.disabled = true;
rassButton.disabled = true;


startButton.addEventListener('click', function() {
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt ('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt ('Ваш бюджет на месяц?');
      }
    timeData.budget = money;
    timeData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expButton.disabled = false;
    utvButton.disabled = false;
    rassButton.disabled = false;
});

expButton.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesInput.length; i++) {
        let a = expensesInput[i].value;
        let b = expensesInput[++i].value;

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
          timeData.expenses[a] = b;
          sum += +b;
        } else {
            i = i - 1;
          }
      }
    expensesValue.textContent = sum; 
});



utvButton.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItem.length ; i++) {
        let q = optionalexpensesItem[i].value;
        timeData.optionalExpenses[i] = q;
        optionalexpensesValue.textContent += timeData.optionalExpenses[i] + ' ';
      }
});

rassButton.addEventListener('click', function() {

    if (timeData.budget != undefined) {
        timeData.moneyPerDay = ((money - +expensesValue.textContent)/30).toFixed();
        daybudgetValue.textContent = timeData.moneyPerDay;

        if (timeData.moneyPerDay < 1000) {
        levelValue.textContent = 'Минимальный уровень достатка';
        } else if (timeData.moneyPerDay <= 2000) {
          levelValue.textContent = 'Средний уровень достатка';
        } else if (timeData.moneyPerDay > 3000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
              levelValue.textContent = 'Произошла ошибка';
            }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка!';
    }

    
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    timeData.income = items.split(', ');
    incomeValue.textContent = timeData.income;
});

savings.addEventListener('click', function() {
    if (timeData.savings == true) {
        timeData.savings = false;
    } else {
        timeData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (timeData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;
        timeData.monthIncome = sum/100/12 * percent;
        timeData.yearIncome = sum/100 * percent;
        monthsavingsValue.textContent = timeData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = timeData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (timeData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;
        timeData.monthIncome = sum/100/12 * percent;
        timeData.yearIncome = sum/100 * percent;
        monthsavingsValue.textContent = timeData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = timeData.yearIncome.toFixed(1);
    }
});
    
    let timeData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };


    /*
    let i = 0;
    while (i < 2) {
      let a = prompt ('Введите обязательную статью расходов в этом месяце', '');
      let b = prompt ('Во сколько обойдется?', '');
      i++;

      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
        console.log('done');
        timeData.expenses[a] = b;
      } else {
        alert ('Введите корректные данные!');
        i = 0;
      }

    };
    
    
    let i = 0;
    do {
      let a = prompt ('Введите обязательную статью расходов в этом месяце', '');
      let b = prompt ('Во сколько обойдется?', '');
      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
        console.log('done');
        timeData.expenses[a] = b;
      } else {
        alert ('Введите корректные данные!');
        i = 0;
      }
      i++;
    }
    while (i < 2);
    */
    
    
    
    
 

    

   

