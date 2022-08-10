// Color Picker
const colorPicker = document.querySelector('#colorPicker');
const defaultColor = 'white';
// Size Picker
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function(event){
    makeGrid(event);
});
const rows = document.querySelector('#inputHeight');
const columns = document.querySelector('#inputWidth');
// Canvas
const designCanvas = document.querySelector('#pixelCanvas');
// Add Color
const singleClick = 'click';
/**
 * Adds color to the cell -> [row,column]
 * @param {event} event - Click Event
 */
function addColor(event) {
    event.preventDefault();
    event.target.style.backgroundColor = colorPicker.value;
}
// Remove Color
const doubleClick = 'dblclick';
/**
 * Removes color from the cell -> [row,column]
 * @param {event} event - Double Click Event
*/
function removeColor(event) {
    event.preventDefault();
    event.target.style.backgroundColor = defaultColor;
}
/**
 * Create grid for the design canvas
 * @param {event} event - Submit Event
 * Note that this will use the current width and height
 * used as input on the size picker. 
*/
function makeGrid(event) {
    event.preventDefault();
    // Clean current grid
   while(designCanvas.firstChild) {
    designCanvas.removeChild(designCanvas.firstChild);
   }
    // Create Grid w/rows & columns
    for(let row = 0; row < rows.value; row ++) {
        let insertRow = designCanvas.insertRow(row);
        for(let column = 0; column < columns.value; column++) {
            let insertColumn = insertRow.insertCell(column);
            // Events
            insertColumn.addEventListener(singleClick,addColor);
            insertColumn.addEventListener(doubleClick, removeColor);
        }
    }
}
