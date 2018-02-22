
function difDate(d1,d2){
//d1,d2 - объекты класса Date
  var obj={
    day:0,
    hours:0,
    min:0,
    sec:0,
    ms:0,
    actuall:0// 0-даты совпали, -1 - прошло, 1-осталось.
    }

  var t=d2.getTime()-d1.getTime();// Разность в милисекундах между двумя датами
  obj.actuall=Math.sign(t);


  if(t<0){
  //поменять местами, если первая дата больше второй, чтобы т не было отрицательным
  t*=(-1);
  }

  obj.day=Math.floor(t/(1000*60*60*24));//дни
  document.getElementById("days").innerHTML=obj.day;
  t=t%(obj.day*1000*60*60*24);//остаток мс меньше одного дня

  obj.hours=Math.floor(t/(1000*60*60));
  document.getElementById("hours").innerHTML=obj.hours;
  t=t%(obj.hours*1000*60*60);

  obj.min=Math.floor(t/(1000*60));
  document.getElementById("minutes").innerHTML=obj.min;
  t=t%(obj.min*1000*60);


return obj;
}

var date2=new Date(document.getElementById("dat").value);
var date1=new Date(document.getElementById("dat1").value);
difDate(date2,date1);
