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
// Design Canvas
const designCanvas = document.querySelector('#pixelCanvas');
// Add color to [row,column] element
const singleClick = 'click';
function addColor(event) {
    event.preventDefault();
    event.target.style.backgroundColor = colorPicker.value;
}
// Remove color from [row,column] element
const doubleClick = 'dblclick';
function removeColor(event) {
    event.preventDefault();
    event.target.style.backgroundColor = defaultColor;
}
// Create Grid
function makeGrid(event) {
    event.preventDefault();
    // Clean current grid
   while(designCanvas.firstChild) {
    designCanvas.removeChild(designCanvas.firstChild);
   }
    // Create Grid w/rows & columns
    for(let row = 0; row <= rows.value; row ++) {
        let insertRow = designCanvas.insertRow(row);
        for(let column = 0; column <= columns.value; column++) {
            let insertColumn = insertRow.insertCell(column);
            // Events
            insertColumn.addEventListener(singleClick,addColor);
            insertColumn.addEventListener(doubleClick, removeColor);
        }
    }
}
