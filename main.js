var boxtop=200;
var boxleft=200;

'use strict';
            
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  document.getElementById("box").style.top = boxtop;
  document.getElementById("box").style.left = boxleft;
    if (keyName === "ArrowUp") {
       boxtop -= 20;
       document.getElementById("box").style.top = boxtop + "px";
    }
    if (keyName === "ArrowDown") {
        boxtop += 20;
        document.getElementById("box").style.top = boxtop + "px";

    }
    if (keyName === "ArrowRight") {
        boxleft += 20;
        document.getElementById("box").style.left = boxleft + "px";
    }
    if (keyName === "ArrowLeft") {
        boxleft -= 20;
        document.getElementById("box").style.left = boxleft + "px";
    }


  console.log('keydown event\n\n' + 'key: ' + keyName);
});