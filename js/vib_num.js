function checkInfo(){
  var year=document.getElementById("year").value;
  var month=document.getElementById("month").value;
  var day=document.getElementById("day").value;

  var y= +year;
  var m= +month;
  var d= +day;
  if (y>0) {
      if (m>0 && m<13) {
        if ((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)){
          if(m==2){
            if (d<30 && d>0) {
            document.getElementById("cor3").style.display="inline";

            }
            else {
            document.getElementById("incor3").style.display="inline";
            }
          }
          else if (m==4 || m==6 || m==9 || m==11){
            if (d<31 && d>0) {
              document.getElementById("cor3").style.display="inline";

            }
            else {
              document.getElementById("incor3").style.display="inline";
            }
          }
          else if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
            if (d<32 && d>0) {
              document.getElementById("cor3").style.display="inline";

            }
            else {
              document.getElementById("incor3").style.display="inline";
            }
          }
        }

        else if (!(y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)){
          if(m==2){
            if (d<29 && d>0) {
              document.getElementById("cor3").style.display="inline";

            }
            else {
              document.getElementById("incor3").style.display="inline";
            }
          }
          else if (m==4 || m==6 || m==9 || m==11){
            if (d<31 && d>0) {
              document.getElementById("cor3").style.display="inline";

            }
            else {
              document.getElementById("incor3").style.display="inline";
            }
          }
          else if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
              if (d<32 && d>0) {
                document.getElementById("cor3").style.display="inline";

              }
              else {
                document.getElementById("incor3").style.display="inline";
              }
            }
          }
        document.getElementById("cor2").style.display="inline";

      }
      else {
          document.getElementById("incor4").style.display="inline";
          document.getElementById("incor2").style.display="inline";
        }

    document.getElementById("cor1").style.display="inline";

  }
  else {
    document.getElementById("incor1").style.display="inline";
    document.getElementById("incor4").style.display="inline";
  }
}

function vibNum(){
var y=document.getElementById("year").value;
var m=document.getElementById("month").value;
var d=document.getElementById("day").value;

var s=y+m+d;

while(s.length>1){
    for (var i = 0,sum=0; i < s.length; i++) {
      sum+=+s[i];
    }
     console.log(sum);
     s=String(sum);
  }
  if(s==""){
    res.innerHTML=("Calculating without numbers? Interesting...");
  }
  else {
    res.innerHTML=("Your vibration number is: "+s);
  }

}
