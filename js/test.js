var buttest = document.getElementById("buttest");
var countTest = 0;
var chetest = document.getElementById("test");
var checktest = chetest.getElementsByTagName("input");

function countingRight(a) {
  for (var i = 0; i < 18; i++) {
    if (a[i].checked && (a[i].value=="1")) {
      countTest++;
    }
  }
  return countTest;
}

buttest.onclick = function() {

  countingRight(checktest);

  if (countTest==0) {
    document.getElementById("res0").style.display = "block";
  }
  if (countTest==1) {
    document.getElementById("res1").style.display = "block";
  }
  if (countTest==2) {
    document.getElementById("res2").style.display = "block";
  }
  if (countTest==3) {
    document.getElementById("res3").style.display = "block";
  }
  if (countTest==4) {
    document.getElementById("res4").style.display = "block";
  }
  if (countTest==5) {
    document.getElementById("res5").style.display = "block";
  }
  if (countTest==6) {
    document.getElementById("res6").style.display = "block";
  }
}
