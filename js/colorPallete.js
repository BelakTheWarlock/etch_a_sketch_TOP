const colorPalleteContainer = document.getElementById("color-pallete-container");
const colorPalleteController = document.getElementById("color-pallete-controller");

function createColorSelectorSquare(color) {
    const sqr = document.createElement("div");
    sqr.style.width = "20px";
    sqr.style.height = "20px";
    sqr.style.backgroundColor = color;
    sqr.classList += "colorPalleteSelectorSquare";

    sqr.addEventListener("click", () => {
        document.getElementById("selectedColor").style.backgroundColor = color;
        window.color = color;
    });

    return sqr;
}

function createColorSelectorColumn(r, g, b) {
    const row = document.createElement("div");
    row.style.margin = "0 0 0 0";
    row.style.border = "none";
    row.style.padding = "0 0 0 0";
    row.style.display = "flex";

    for (let colorValue = 0; colorValue < 256; colorValue+=1) {
        let color = "rgb(";
        if(r > 0) color += `${colorValue},`;
        else color += '0,';
        if(g > 0) color += `${colorValue},`;
        else color += '0,';
        if(b > 0) color += `${colorValue})`;
        else color += '0)';
        row.appendChild(createColorSelectorSquare(color));
    }

    return row;
}

/**
 * Create available color columns.
 */

function generateColorPalleteSelector() {
    const colorPalleteSelector = document.getElementById("color-pallete-selector");
    document.getElementById("selectedColor").style.backgroundColor = "#000";
    const columns = {
        red:    createColorSelectorColumn(255, 0 ,0),
        yellow: createColorSelectorColumn(255, 255, 0),
        green:  createColorSelectorColumn(0, 255, 0),
        cyan:   createColorSelectorColumn(0, 255, 255),
        blue:   createColorSelectorColumn(0, 0 , 255),
        purple: createColorSelectorColumn(255, 0, 255),
        gray:   createColorSelectorColumn(255, 255, 255),
    };

    Object.keys(columns).forEach(column => {
        colorPalleteSelector.appendChild(columns[column]);
    })
}

export { generateColorPalleteSelector }