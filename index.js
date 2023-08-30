const canvas = document.querySelector('#canvas');
const elem = document.querySelectorAll('.element');

function changeSize(size){

}

function createGrid(size){
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        const canvasElem = document.createElement('div');
        canvasElem.classList.add('element');

        canvas.insertAdjacentElement('beforeend', canvasElem);
    }
}

let canvasSize = 16;
createGrid(canvasSize);