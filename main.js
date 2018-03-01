var boxtop=200;
var boxleft=200;

'use strict';
            
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  document.getElementById("box").style.top = boxtop
  document.getElementById("box").style.left = boxleft
    if (keyName === "ArrowUp") {
       boxtop + "100px";
    }
    if (keyName === "ArrowDown") {
        boxtop - "100px";
    }
    if (keyName === "ArrowUp") {
        boxleft + "100px";
    }
    if (keyName === "ArrowLeft") {
        boxleft - "100px";
    }


  console.log('keydown event\n\n' + 'key: ' + keyName);
});