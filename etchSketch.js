const container = document.querySelector('.container');


function createGrid(x) {
    for (let i = 0; i < x; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row)
        row.textContent = i;
    }   for (let j = 0; j < x; j++){
            column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
            column.textContent = j;
    }
    
}

console.log(createGrid(32))