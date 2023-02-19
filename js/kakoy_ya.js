"use strict";
 
const button = document.getElementsByClassName("start")[0];
const form = document.querySelector("form");
 
button.addEventListener("click", function () {
  const answers = new FormData(document.querySelector("form"));
  let sum = 0;
  for (let [quest, answer] of answers) {
    sum += +answer;
  }
  let conclusion = null;
  if (sum <= 3) {
    conclusion = "Уровень развития - низкий";
  } else if (sum <= 7) {
    conclusion = "Уровень развития - средний";
  } else if (sum <= 9) {
    conclusion = "Уровень развития - высокий";
  } else {
    conclusion = "Уровень развития - очень высокий";
  }
 
  alert("Ваш результат: " + sum);
  alert(conclusion);
});