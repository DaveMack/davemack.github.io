let bars = document.getElementsByClassName("bar");
console.log(bars.length);
for(let i = 0; i < bars.length; i++){
  console.log(bars[i]);
  bars[i].style.width = bars[i].innerText; 
}
