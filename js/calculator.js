var mem=null;

function add(x){
calc.scr.value=calc.scr.value+x;
}
function eqv(){
calc.scr.value=eval(calc.scr.value);
}
function clean(){
calc.scr.value="";
}

function pm(){
calc.scr.value=(-1)*eval(calc.scr.value);
}

function bs(){
var s=calc.scr.value;
calc.scr.value=s.substr(0, s.length-1)
}


function mplus(){
mem=parseFloat(eval(calc.scr.value))+mem;
}

function mmin(){
mem=mem-(eval(calc.scr.value));
}

function memread(){
if(mem!=null){
if(mem<0){
calc.scr.value=calc.scr.value+"("+mem+")";

}

   else
   calc.scr.value=calc.scr.value+mem;
   }
}

function memclean(){
mem=null;
}

var dvbut=document.getElementById('dvbut');

dvbut.onclick=function(event){
event=event||window.event;
var tg=event.target;
console.log(tg);
var atr=tg.getAttribute('data-v')
console.log(atr);
if(atr!=null){
  add(atr); //add(tg.value)
}
else{
  switch(tg.name){
  case 'eq': eqv(); break;
  case 'bs': bs(); break;
  case 'clean': clean(); break;
  case 'pm': pm(); break;
  case 'mplus': mplus(); break;
  case 'mmin': mmin(); break;
  case 'memread': memread(); break;
  case 'memclean': memclean(); break;
  }
   }
}
// Запрет клавиатуры
calc.scr.onkeydown=function(event){
event=event||window.event;
event.preventDefault();
var ch=event.charCode||event.keyCode;
console.log(ch);
if(ch>47&&ch<58) {
calc.scr.value+=String.fromCharCode(ch);
}
if(ch==8) bs();
}
calc.memread.onkeydown=function(event){
//alert(event.bubbles);
event.preventDefault();
}
dvbut.onkeydown=function(event){
event=event||window.event;
event.preventDefault();

}
