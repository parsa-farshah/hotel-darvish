let firstP = document.getElementById("firstP");
let btn1 = document.getElementById("btn1");
let dropDown1 = document.getElementById("dropDown1");

let secondP = document.getElementById("secondP");
let btn2 = document.getElementById("btn2");
let dropDown2 = document.getElementById("dropDown2");

let breakFastP = document.getElementById("breakFastP");
let btn3 = document.getElementById("btn3");
let dropDown3 = document.getElementById("dropDown3");

let roomServiceP = document.getElementById("roomServiceP");
let btn4 = document.getElementById("btn4");
let dropDown4 = document.getElementById("dropDown4");

let gameP = document.getElementById("gameP");
let btn5 = document.getElementById("btn5");
let dropDown5 = document.getElementById("dropDown5");

let pakageP = document.getElementById("pakageP");
let btn6 = document.getElementById("btn5");
let dropDown6 = document.getElementById("dropDown6");

btn1.addEventListener("click", () => {
  firstP.classList.toggle("opacity-0");
  firstP.classList.toggle("max-h-0");
  firstP.classList.toggle("h-auto");
  dropDown1.classList.toggle("rotate-180");
  dropDown1.classList.add("duration-300");
});

btn2.addEventListener("click", () => {
  secondP.classList.toggle("opacity-0");
  secondP.classList.toggle("max-h-0");
  secondP.classList.toggle("h-auto");
  dropDown2.classList.toggle("rotate-180");
  dropDown2.classList.add("duration-300");
});

btn3.addEventListener("click", () => {
  breakFastP.classList.toggle("opacity-0");
  breakFastP.classList.toggle("max-h-0");
  breakFastP.classList.toggle("h-auto");
  dropDown3.classList.toggle("rotate-180");
  dropDown3.classList.add("duration-300");
});

btn4.addEventListener("click", () => {
  roomServiceP.classList.toggle("opacity-0");
  roomServiceP.classList.toggle("max-h-0");
  roomServiceP.classList.toggle("h-auto");
  dropDown4.classList.toggle("rotate-180");
  dropDown4.classList.add("duration-300");
});

btn5.addEventListener("click", () => {
  gameP.classList.toggle("opacity-0");
  gameP.classList.toggle("max-h-0");
  gameP.classList.toggle("h-auto");
  dropDown5.classList.toggle("rotate-180");
  dropDown5.classList.add("duration-300");
});

btn6.addEventListener("click", () => {
  pakageP.classList.toggle("opacity-0");
  pakageP.classList.toggle("max-h-0");
  pakageP.classList.toggle("h-auto");
  dropDown6.classList.toggle("rotate-180");
  dropDown6.classList.add("duration-300");
});
