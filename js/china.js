function identSign(){
  var year=document.getElementById('dataSign').value;
  var y= +year;
  console.log(y);
  if(((y+12)%12)==1){
     document.getElementById('rooster').style.display='block';
  }
  else {
    document.getElementById('rooster').style.display='none';
  }
  if(((y+12)%12)==2){
     document.getElementById('dog').style.display='block';
  }
  else {
    document.getElementById('dog').style.display='none';
  }
  if (((y+12)%12)==3){
     document.getElementById('pig').style.display='block';
  }
  else {
    document.getElementById('pig').style.display='none';
  }
  if(((y+12)%12)==4){
     document.getElementById('rat').style.display='block';
  }
  else {
    document.getElementById('rat').style.display='none';
  }
  if(((y+12)%12)==5){
     document.getElementById('bull').style.display='block';
  }
  else {
    document.getElementById('bull').style.display='none';
  }
  if(((y+12)%12)==6){
     document.getElementById('tiger').style.display='block';
  }
  else {
    document.getElementById('tiger').style.display='none';
  }
  if(((y+12)%12)==7){
     document.getElementById('rabbit').style.display='block';
  }
  else {
    document.getElementById('rabbit').style.display='none';
  }
  if(((y+12)%12)==8){
     document.getElementById('dragon').style.display='block';
  }
  else {
    document.getElementById('dragon').style.display='none';
  }
  if(((y+12)%12)==9){
     document.getElementById('snake').style.display='block';
  }
  else {
    document.getElementById('snake').style.display='none';
  }
  if(((y+12)%12)==10){
     document.getElementById('horse').style.display='block';
  }
  else {
    document.getElementById('horse').style.display='none';
  }
  if(((y+12)%12)==11){
     document.getElementById('goat').style.display='block';
  }
  else {
    document.getElementById('goat').style.display='none';
  }
  if(((y+12)%12)==0 && y!=""){
     document.getElementById('monkey').style.display='block';
  }
  else {
    document.getElementById('monkey').style.display='none';
  }

  if(y==""){
  document.getElementById('empty').style.display='block';
  }
  else {
    document.getElementById('empty').style.display='none';
  }
}

  //var chek=
window.addEventListener('load',function(){check.onclick=identSign});
