const gridContainer = document.querySelector('#container');
let gridCell = document.getElementsByClassName("gridCell");

makeGrid(16);

function makeGrid(num) {
  for (let i = 0; i < (num*num + 1); i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridCell");
    gridContainer.appendChild(gridBox);
    }
};
