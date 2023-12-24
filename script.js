// const mydiv=document.querySelector("div")
// function sales(){
//     alert()
// }
// let time= setTimeout(sales,5000)

const countdown = document.getElementById("countdown");

let countItDown = function() {
    countdown.textContent = parseFloat(countdown.textContent) -0;  
  };
  window.setInterval(countItDown, 1000);
  function myStopFunction() {
    clearInterval(countdown);
  }