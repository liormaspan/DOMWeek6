// part1
// 1-2
// function hello(phrase){
//     alert("hello world")
// }
// setTimeout(hello,2000)

// part2
// 1-2
// const container=document.getElementById("container")
// const myp=document.createElement("p")
// const text=document.createTextNode("hello world")
// myp.append(text)
// container.append(myp)
// console.log(container);

// function helloWorld(word){
//     console.log(myp)
// }
// setTimeout(helloWorld,2000)

// part3-4
// const container=document.getElementById("container")
// const myp=document.createElement("p")
// const text=document.createTextNode("hello world")
// const button=document.getElementById("clear")
// console.log(button);
// myp.append(text)
// container.append(myp)
// console.log(container);

// function hello(phrase){
//     console.log("hello world");
// }
// let intervalId=setInterval(hello,2000)


// button.addEventListener("click", function(){
//     clearInterval(intervalId)
// })

// EXE2

// const box=document.getElementById("animate")

// let position=0
// let intervalId=setInterval(function (){
//   if(position==350){
//     clearInterval(intervalId)
//   }
//   position++
//   box.style.left=`${position}px`
// },10)

// EXE3

function dragStart(event) {
    event.dataTransfer.setData("event", event.target.id);
  }
  
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    event.target.appendChild(document.getElementById(data));

  }