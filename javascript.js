
let container = document.querySelector(".container");

//Draws the grid of "dimension" squares per side.
function drawGrid(dimension) {
    container.textContent = "";
    for (let i = 0; i < Math.pow(dimension, 2); i++) {
        let div = document.createElement("div");
        div.style.float = "left",
        div.style.width = `calc(600px / ${dimension})`;
        div.style.height = `calc(600px / ${dimension})`;
        div.style.border = "1px solid black";
        div.style.boxSizing = "border-box";

        //Calls mouseOver function to change to a random color when mouse hovers over each grid.
        div.addEventListener("mouseover", mouseOver);

        //Calls mouseOut function to make the grids return to have their default color when the mouse stops hovering them.
        div.addEventListener("mouseout", mouseOut);


        function mouseOver() {
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }
        function mouseOut() {
            div.style.backgroundColor = `cornsilk`;
        }
        container.appendChild(div);
    }
}

let button = document.querySelector("button");

//When pressed, asks users to enter the dimension of the grid they want, and draws it.
button.addEventListener("click", () => {
    let n = prompt("What is the number of squares per side do you want your new grid to have? (maximum is 100)", 0);
    if (n >100) n = 100;
    drawGrid(n);
});

