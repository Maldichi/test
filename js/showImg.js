function showImg(srcIm){
  var x=document.getElementById('mwimg');
  x.src=srcIm;
}

var sheath=document.getElementById('sheath');
console.log(typeof sheath);
sheath.onclick=function(event){
  event=event||window.event;
  var mv=event.target;
  var si=mv.getAttribute('show-im')
    if(si!=null){
      showImg(mv.src); //add(tg.value)
    }
}
