const body = document.body;
const container = document.querySelector(".container");
const gridBox = document.createElement("div");
// const box = document.querySelectorAll(".box");
const box = document.getElementsByClassName("box");

function hoverEffect() {
  box.setAttribute("class", "hover");
}

for (let x = 0; x < 256; x++) {
  //16x16=256
  const gridBox = document.createElement("div");
  gridBox.setAttribute("class", "box");
  container.append(gridBox);
}

for (let y = 0; y < 256; y++) {
  box[y].addEventListener("mouseover", function hover() {
    box[y].classList.add("hover");
  });
}
