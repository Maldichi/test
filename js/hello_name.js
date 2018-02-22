



var task5 = document.getElementById("task5");
var helloname = document.getElementById("helloname");
helloname.onclick = function() {
  var ask=document.getElementById("youname").value;
  var answer=document.getElementById("youage").value;
  console.log(answer);
if (ask=='') {
  console.log(task5);
  task5.innerHTML = ("Можно было и представиться...)))");
}
if (answer=='') {
  task5.innerHTML = ("Привет, " +ask+ " "+"скрываешь свой возраст?");
}
if (answer=='1'){
  task5.innerHTML = ("Привет " +ask+ " "+"Вам один годик!!!");
}
if (answer>1 && answer<5){
  task5.innerHTML = ("Привет " +ask+ " " +"Вам " +answer+ " "+"годика!!!");
}
if (answer>4 && answer<21){
  task5.innerHTML = ("Привет " +ask+ " " +"Вам " +answer+ " "+"лет!!!");
}
if (answer==21 || answer==31 || answer==41 || answer==51 || answer==61 || answer==71 || answer==81 || answer==91 || answer==101){
  task5.innerHTML = ("Привет " +ask+ " " +"Вам " +answer+ " "+"год!!!");
}
if (answer>21 && answer<25 || answer>31 && answer<35 || answer>41 && answer<45 || answer>51&& answer<55 || answer>61&& answer<65 || answer>71&& answer<75 || answer>81&& answer<85 || answer>91&& answer<95 || answer>101&& answer<105){
  task5.innerHTML = ("Привет " +ask+ " " +"Вам " +answer+ " "+"года!!!");
}
if (answer>24 && answer<31 || answer>34 && answer<41 || answer>44 && answer<51 || answer>54&& answer<61 || answer>64&& answer<71 || answer>74&& answer<81 || answer>84&& answer<91 || answer>94&& answer<101 || answer>104&& answer<121){
  task5.innerHTML = ("Привет " +ask+ " " +"Вам " +answer+ " "+"лет!!!");
}
if (answer<0 || answer>120){
  task5.innerHTML = ("Признавайся... Кто научил обманывать?");
}
if(answer=='0')
task5.innerHTML = ("Ты почему без мамы?");
}
