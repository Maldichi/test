function rnd(A,B,n){
	A=Math.abs(A);
	B=Math.abs(B);
		if(A>B){
			var x=A;
			A=B;
			B=x;
		}
	var mas=[];
	for(var i=0; i<n; i++){
		mas[i]=Math.round((B-A)*Math.random()+A);
	}
  return mas;
}
rnd(4,19,10); // получаем 10 чисел от 4 до 19

var dim=document.querySelector("#dimension");
var numdim=parseInt(dim.value);
var matrixs=document.querySelector("#matrixs");
// Добавление дива с кнопками, для работы с матрицами
var divbutmatr=document.createElement("div");
divbutmatr.id="divbutmatr";


//Свойства блока с кнопками
divbutmatr.style.display="inline-block";
divbutmatr.style.textAlign="center";
divbutmatr.style.margin="0px 5px";


var mplus=document.createElement("button");
divbutmatr.appendChild(mplus);
mplus.id="mplus";
mplus.innerHTML="+";
divbutmatr.innerHTML+="<br>";
// "-"
var mmin=document.createElement("button");
divbutmatr.appendChild(mmin);
mmin.id="mmin";
mmin.innerHTML="-";

divbutmatr.innerHTML+="<br>";
//"*"
var mmul=document.createElement("button");
divbutmatr.appendChild(mmul);
mmul.id="mmul";
mmul.innerHTML="*";

divbutmatr.innerHTML+="<br>";
//"rnd"
var mrnd=document.createElement("button");
divbutmatr.appendChild(mrnd);
mrnd.id="mrnd";
mrnd.innerHTML="rnd";
//alert(dim.value);

//назначение обработчиков на кнопки

function rndMatr12(){
//alert();
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");

	// Коллекция инпутов первой и второй матрицы
	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var n=numdim*numdim;//сколько чисел нужно для одной матрицы
	var mas=rnd(0,100,2*n);
	///alert(mas);

	for (var i=0; i<n; i++){
	//inpm1[i].value=rnd(0,100,1)[0];
	inpm1[i].value=mas[i];
	inpm2[i].value=mas[i+n];
	}
}

dim.onchange=function(){

numdim=parseInt(dim.value);
matrixs.innerHTML="";
// Добавление єлементов(тегов) на страницу

var matr1=document.createElement("div"); // Создание тега

// Указание места для созданного тега
matrixs.appendChild(matr1);

//Задание свойств
matr1.id="matr1";
matr1.style.display="inline-block";
matr1.style.margin="8px";
matr1.style.backgroundColor="#fd2541";

//Добавляем Инпуты
for(var i=0; i<numdim; i++){
	for(var j=0;j<numdim; j++){
		var inp=matr1.appendChild(document.createElement("input"));
		inp.style.width="40px";
		inp.style.height="40px";
		inp.style.margin="4px";
		matr1.appendChild(inp);
		}
	matr1.innerHTML+="<br>";
	}
	//размещение блока с кнопками
	divbutmatr=matrixs.appendChild(divbutmatr);

// Клонирование узлов
var matr2=matr1.cloneNode(true);
var matr3=matr1.cloneNode(true);
matrixs.appendChild(matr2);
matr2.id="matr2"
matr2.style.backgroundColor="red";
matrixs.innerHTML+="<hr>";
matrixs.appendChild(matr3);
matr3.id="matr3"
matr3.style.backgroundColor="green";
mrnd=document.getElementById("mrnd");
mrnd.onclick=rndMatr12;

mplus=document.getElementById("mplus");
mplus.onclick=plusMatr12;

mmul=document.getElementById("mmul");
mmul.onclick=multMatr12;

mmin=document.getElementById("mmin");
mmin.onclick=minMatr12;
}

function plusMatr12(){
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");
	var matr3=document.getElementById("matr3");

	// Коллекция инпутов первой и второй матрицы
	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var inpm3=matr3.getElementsByTagName("input");
	var n=numdim*numdim;
		for(i=0; i<n; i++){
		inpm3[i].value=Number(inpm1[i].value)+Number(inpm2[i].value)
		}
}
function minMatr12(){
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");
	var matr3=document.getElementById("matr3");

	// Коллекция инпутов первой и второй матрицы
	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var inpm3=matr3.getElementsByTagName("input");
	var n=numdim*numdim;
		for(i=0; i<n; i++){
		inpm3[i].value=Number(inpm1[i].value)-Number(inpm2[i].value)
		}
}

function multMatr12(){

	 var matr1=document.getElementById('matr1');
			 var matr2=document.getElementById('matr2');
			 var matr3=document.getElementById('matr3');


			 var inpm1=matr1.getElementsByTagName('input');
			 var inpm2=matr2.getElementsByTagName('input');
			 var inpm3=matr3.getElementsByTagName('input');

	 var mas1=[],mas2=[];
			 for(var i=0;i<numdim;i++){
				 mas1[i]=[];
				 mas2[i]=[];
				 for(var j=0;j<numdim;j++){
					mas1[i][j]=inpm1[j+numdim*i].value;
					mas2[i][j]=inpm2[j+numdim*i].value;
				  }
			 }

			 for(var i=0;i<numdim;i++){
					for(var j=0;j<numdim;j++){
								for(var k=0,s=0;k<numdim;k++){
									s+=mas1[i][k]*mas2[k][j];
								}
							inpm3[j+numdim*i].value=s;
					 }
			 }
 }
