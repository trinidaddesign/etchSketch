


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


function getSize(input) {
    input = prompt('Enter a number between 4 and 100')
    input > 3 && input < 101 ? createGrid(input) : console.log('Please enter a valid number');}


function resetGrid() {
    let container = document.querySelector('.container');
    let box = container.querySelectorAll("div");
    box.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));}



