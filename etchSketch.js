


function createGrid(size) {
let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let x = size * size;
    for (i = 0; i < x; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('mouseover', (e => {
            if(e.buttons) {
                e.target.style.background = 'black'
            }}))
    }
}


/*window.addEventListener('DOMContentLoaded', (e => {
    createGrid(20);
}));*/




function getSize(input) {
    input > 3 && input < 101 ? createGrid(input) : alert('Please enter a valid number');
return input;}


function resetGrid() {
    let container = document.querySelector('.container');
    let box = container.querySelectorAll("div");
    box.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));}






