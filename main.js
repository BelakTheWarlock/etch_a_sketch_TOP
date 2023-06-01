import { generateGrid, newGrid } from "./js/grid.js";
import { generateColorPalleteSelector } from "./js/colorPallete.js";

const DEFAULT = {
    _SIZE: 16,
    _COLOR: "#000000" // Pitch Black
}
window.color = "#000000";

generateColorPalleteSelector();
generateGrid(16);

document.getElementById("new-grid-button").addEventListener("click", () => {
    let width = parseInt(prompt("Grid Width:"));
    width > 100 || width < 16 ? alert(`Grid size must be any size from 16 to 100`) : newGrid(width);
});