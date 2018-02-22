
var clipText = document.getElementById("task4");
    var postClip=clipText.getElementsByTagName("li");
    but.onclick=function (){
      for (var i = 0; i < postClip.length; i++) {
        //console.log(p[i].innerHTML);
        var str=postClip[i].innerHTML;
        var go=(str.substr(0,30)+"...");
        postClip[i].innerHTML=go;
        //console.log(go);
      }
    }
