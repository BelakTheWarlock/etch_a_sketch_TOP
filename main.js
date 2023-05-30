import { generateGrid, setPenColor } from "./js/grid.js";
import { generateColorPalleteSelector } from "./js/colorPallete.js";

const DEFAULT = {
    _SIZE: 16,
    _COLOR: "#000000" // Pitch Black
}
window.color = "#000000"

document.querySelectorAll("colorPalleteSelectorSquare");

generateColorPalleteSelector();
generateGrid();