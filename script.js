const body = document.body;
const container = document.querySelector(".container");
const gridBox = document.createElement("div");
const box = document.querySelectorAll(".box");

function hoverEffect() {
  box.setAttribute("class", "hover");
}

for (let x = 0; x < 256; x++) {
  //16x16=256
  const gridBox = document.createElement("div");
  gridBox.setAttribute("class", "box");
  container.append(gridBox);
}

//My attempt at making a 'hover' effect with css
// box.addEventListener(
//   "click",
//   hoverEffect
// );

/* Theory: It is not working because the computer
 is looking at the original html, there is no box in the original html*/

// box.forEach(() => {
//   box.addEventListener("mouseover", (e) => {
//     box.style.color = "black";
//   });
// });

//Discord's code, still not working
// for (let x = 0; x < 256; x++) {
//   //16x16=256
//   const gridBox = document.createElement("div");
//   gridBox.classList.add("box");
//   container.append(gridBox);
// }

// box.forEach((gridBox) =>
//   box.addEventListener("mouseover", (e) => box.classList.add("hover"))
// );
