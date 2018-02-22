var x0=-2;//начальная позиция
var xk=-502;//конечная позиция
var dx=85;//дельта позиция при клике
var y0=-2;//начальная позиция
var yk=-302;//конечная позиция
var dy=77;//дельта позиция при клике

var fright=document.querySelector("#fright");
var currentx=x0; //  Текущая позиция по горизонтали(по х)
fright.onclick=function(){

fon.style.backgroundPositionX=currentx+"px";
if (currentx<=xk) currentx=x0;
else currentx-=dx;


}
var fleft=document.querySelector("#fleft");
fleft.onclick=function(){
fon.style.backgroundPositionX=currentx+"px";
if (currentx>=x0) currentx=xk;
else currentx+=dx;

}
var currenty=y0;

var fup=document.querySelector("#fup");
fup.onclick=function(){
fon.style.backgroundPositionY=currenty+"px";
if (currenty>=y0) currenty=yk;
else currenty+=dy;
}
var fdown=document.querySelector("#fdown");
fdown.onclick=function(){
fon.style.backgroundPositionY=currenty+"px";
if (currenty>=y0) currenty=yk;
else currenty-=dy;
}
