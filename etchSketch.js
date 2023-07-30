//sets black as default color
let color = "black";
//color change functions
function red() {
    color = "red";
}
function blue() {
    color = "blue";
}
function green() {
    color = "green"
}

function black() {
    color = "black";
}
//function to create divs. first rmoves the divs
//takes the input size and doubles it to fill the rows and columns
function createGrid(size) {
let container = document.querySelector('.container');
let boxes = container.querySelectorAll('div');
boxes.forEach((div) => div.remove());
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let x = size * size;
    for (i = 0; i < x; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        //creates the fill in effect allowing user to click and hold to start drawing
        //and release to stop drawing. small bug sometimes it tries to drag. fixed with a dbl click
        box.addEventListener('mouseover', (e => {
            if(e.buttons) {
                e.target.style.background = color;
            }}))
    }
}
//loads a grid of 20x20 to start
window.addEventListener('load', (e => {
    createGrid(20);
}))
//changes the grid size based on user input
function getSize(input) {
    input = prompt('Enter a number between 4 and 100');
    input > 3 && input < 101 ? createGrid(input) : console.log('Please enter a valid number');}

// "erases" the grid by just changing the background color. found the idea on github tbh
function eraseGrid() {
    let container = document.querySelector('.container');
    let box = container.querySelectorAll("div");
    box.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));}

    //evet\nt listeners for all buttons
document.querySelector('.erase').addEventListener('click', (e => {eraseGrid()}))
document.querySelector('.red').addEventListener('click', (e => {red()}));
document.querySelector('.blue').addEventListener('click', (e => {blue()}));
document.querySelector('.green').addEventListener('click', (e => {green()}));
document.querySelector('.black').addEventListener('click', (e => {black()}));
document.querySelector('.size').addEventListener('click', (e => {getSize()}))