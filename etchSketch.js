const container = document.querySelector('.container');


function createGrid(size) {
    size = prompt('enter a number between 4 and 99')
    if ( size === '') {
        size = 16;
    }
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


createGrid()