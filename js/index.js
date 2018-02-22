/*var t1 = document.getElementById("t1");

if (document.getElementById("task1").style.display!="block") {
	t1.onclick = function() {
		document.getElementById("task1").style.display="block";
	}

}
else if (document.getElementById("task1").style.display=="block"){
	document.getElementById("task1").style.display="none";
}

var t2 = document.getElementById("t2");
if (document.getElementById("task2").style.display!="block") {
	t2.onclick = function() {
		document.getElementById("task2").style.display="block";
	}

}
else if (document.getElementById("task2").style.display=="block"){
	document.getElementById("task2").style.display="none";
}*/


var menu=document.getElementById("menu");
menu.onclick=function(event){
var e=event||window.event;
var tg=e.target;
if(tg.id.substr(0,5).toLowerCase()==="mtask"){
changeTask(tg);
	}
}


function changeTask(tg){
//Задаем свойство  currenttask для ф-и в котором будет храниться ссылка на див содержащий текущую задачу
// скроем предыдущую задачу, если она есть
	if(changeTask.currenttask!=undefined){
		changeTask.currenttask.style.display="none";
	}
		changeTask.currenttask=document.getElementById(tg.id.substr(1));
		changeTask.currenttask.style.display="block";
	}


function slideCarousel(carousel) {

	$('.navigate .next').bind('click', function() {
		carousel.next();
		return false;
	});

	$('.navigate .prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};

$(document).ready(function() {

	$(".fcarousel-holder ul").jcarousel({
		scroll: 2,
		auto: 5,
		wrap: 'both',
		initCallback: slideCarousel,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});

});


function clock(idelem) {
	var d=new Date();
	//console.log(d);
	var h = d.getHours();
	var j = d.getMinutes();
	var k = d.getSeconds();
	if (h<10)	h='0'+h;
	if (j<10)	j='0'+j;
	if (k<10)	k='0'+k;
	console.log(typeof h);
	document.getElementById(idelem).innerHTML=h+":" +j+":" +k;
	setTimeout (clock,1000,idelem);
}
clock('myclock');
