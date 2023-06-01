// Sets the background color of each square.
function setPenColor(color) {
    window.penColor = color;
}

function getPenColor() {
    return window.color;
}

function createSquare(pixelXY) {
    let square = document.createElement("div");
    square.setAttribute("class", "grid-square");

    square.style.width = `${pixelXY}px`;
    square.style.height = `${pixelXY}px`;

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

function generateGrid(width) {
    // Width = number of squares per row.
    setPenColor("#000000");
    let grid = document.createElement("div");
    grid.id = "grid";
    // 960 is the pixel width & height of the whole grid
    let squarePixelXY = 960 / width;
    
    for (let rowCount = 0; rowCount < width; rowCount++) {
        let row = createRow();
        for (let squareCount = 0; squareCount < width; squareCount++) {
            // Width is reused in this loop, as I want a big square
            row.appendChild(createSquare(squarePixelXY));
        }
        
        grid.appendChild(row);
    }
    document.getElementById("grid-container").appendChild(grid);
}

function newGrid(width) {
    document.getElementById("grid-container").removeChild(document.getElementById("grid"));
    generateGrid(width);
}

export { generateGrid, newGrid }