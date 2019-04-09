
/*
  var elem = document.getElementById("bar"); 
  var max = elem.innerText;
  console.log(elem);
  console.log(max);
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= max) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
*/
var bars = document.getElementsByClassName("bar");
console.log(bars);
for(let i = 0, length1 = bars.length; i < length1; i++){

  var max = bars[i].innerText;
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >=  bars[i].innerText) {
      clearInterval(id);
    } else {
      width++; 
      bars[i].style.width = width + '%'; 
    }
  }
}
