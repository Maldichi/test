//Число, которое вводит пользователь
let comparison;
//Число, которое загадывает компьютер
var guess="";
//Счетчик совпавших чисел, которые находятся на "своих" местах
var count=0;
//Счетчих любых совпавших чисел
var count1=0;
var count2=0;

//RND

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)+min);
  //rand = Math.round(rand);
}

// Получаем случайное 4-х значное число
function guessNum() {

  //var guess = "";
  for (var i = 0; i < 4; i++) {
    do {
      var step = randomInteger(0, 9);
    } while (guess.indexOf(step)>=0);
    guess += step;
}
return guess;
}

//ф-я сверки загаданного компьютером числа "comp" с пользовательским "you"

function checkOut (comp, you) {

if (you.length>4 || you.length<4) {
  alert("Введите четырехзначное число!", "");
  return;
}

for (var i = 0; i < 4; i++) {

  if (comp[i]==you[i]) {
    count++;
  }

  if (comp.indexOf(you[i])>=0) {
    count1++;
  }
}
}
guessNum();

// Обработчик

function check() {

  console.log(guess);

    comparison = document.getElementById("givennum").value;

  checkOut(guess, comparison);

  var resulgame = document.createElement("div");
  var resstep = document.querySelector("#resstep");
  resstep.appendChild(resulgame);
  resulgame.innerHTML=(count1+':'+count);

  if (guess==comparison) {

    resulgame.innerHTML=("You win!!!");
    document.body.style.backgroundColor="gold";
    return;

  }
  count=0;
  count1=0;
  count2++;

  if (count2==10) {
    resulgame.innerHTML=("You lost");
    document.body.style.backgroundColor="pink";

  }
}
