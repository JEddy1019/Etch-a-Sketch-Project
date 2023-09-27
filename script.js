const body = document.body;
const container = document.querySelector(".container");
const gridBox = document.createElement("div");
const button = document.querySelector("#expand");
const box = document.getElementsByClassName("box");
const expand = document.querySelector("#expand");
const baseGridSize = 256;

//Grid creation
for (let x = 0; x < baseGridSize; x++) {
  const gridBox = document.createElement("div");
  gridBox.setAttribute("class", "box");
  container.append(gridBox);
}

//Hover effect
function hoverEffect(baseGridSize) {
  for (let y = 0; y < baseGridSize; y++) {
    box[y].addEventListener("mouseover", function hover() {
      box[y].classList.add("hover");
    });
  }
}

//Initial box sizing
for (let z = 0; z < baseGridSize; z++) {
  box[z].style.width = 6.25 + "%";
  box[z].style.height = 6.25 + "%";
  hoverEffect(baseGridSize);
}

// Grid deletion function
function deleteGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
    console.log("hi"); //test
  }
}

//Creates a new grid
function createGrid(dimension) {
  for (let a = 0; a < dimension; a++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "box");
    container.append(gridBox);
  }
}

//Used to manipulate size of boxes
function boxSizing(size, dimension) {
  for (let b = 0; b < dimension; b++) {
    box[b].style.width = size + "%";
    box[b].style.height = size + "%";
    hoverEffect(dimension);
  }
}

//Used to prompt the user for an input
function inputPrompt() {
  let answer = prompt(
    "Please enter desired grid size, not exceeding 100. (eg 50 if want a 50x50 grid)"
  );
  return Number(answer);
}

//Used to square input for dimensions
function gridDimensions(input) {
  let amount = input * input;
  // console.log(amount); //test
  return amount;
}

//Used to resize boxes
function boxResizing(input, dimension) {
  let resize;
  resize = 100 / input;
  boxSizing(resize, dimension);
}

//Used to create new grid and size boxes to fit with input
function recreateGrid(input) {
  deleteGrid();
  createGrid(gridDimensions(input));
  boxResizing(input, gridDimensions(input));
}

expand.addEventListener("click", () => {
  recreateGrid(inputPrompt());
});
