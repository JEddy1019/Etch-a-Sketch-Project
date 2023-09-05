const body = document.body;
const container = document.querySelector(".container");
const gridBox = document.createElement("div");
// const gridBox1 = document.createElement("div");
// const gridBox2 = document.createElement("div");

for (let x = 0; x < 256; x++) {
  //256
  const gridBox = document.createElement("div");
  gridBox.setAttribute("class", "box");
  container.append(gridBox);
}

// Identify the container

// gridBox1.setAttribute("class", "box");
// gridBox2.setAttribute("class", "box");
// let box = Array(16).fill(container.append(gridBox));
