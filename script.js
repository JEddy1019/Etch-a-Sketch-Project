const body = document.body;
const container = document.querySelector(".container");
const gridBox = document.createElement("div");
const button = document.querySelector("#expand");
const box = document.getElementsByClassName("box");
let gridSize = 256;

for (let x = 0; x < gridSize; x++) {
  //16x16=256
  const gridBox = document.createElement("div");
  gridBox.setAttribute("class", "box");
  container.append(gridBox);
}

for (let y = 0; y < gridSize; y++) {
  box[y].addEventListener("mouseover", function hover() {
    box[y].classList.add("hover");
  });
}

function expandGrid() {}
