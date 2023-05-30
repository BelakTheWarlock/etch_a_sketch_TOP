// Sets the background color of each square.
function setPenColor(color) {
    window.penColor = color;
}

function getPenColor() {
    return window.color;
}

function createSquare() {
    let square = document.createElement("div");
    square.style.width = "32px";
    square.style.height = "32px";
    square.setAttribute("class", "grid-square");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getPenColor();
    })
    return square;
}

function createRow() {
    let row = document.createElement("div");
    row.setAttribute("class", "grid-row");
    return row;
}

function generateGrid() {
    setPenColor("#000000");
    let grid = document.getElementById("grid");
    for (let rowCount = 0; rowCount < 16; rowCount++) {
        let row = createRow();
        for (let squareCount = 0; squareCount < 16; squareCount++) {
            row.appendChild(createSquare());
        }

        grid.appendChild(row);
    }
}

export { generateGrid, setPenColor }