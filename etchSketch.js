const container = document.querySelector('.container');


function createGrid(size) {
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

function getSize() {
    input = prompt('Enter a number between 4 and 100');
    input >= 4 && input <= 100 ? createGrid(input) : alert('Please enter a valid number');}


getSize()

function resetGrid() {
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}