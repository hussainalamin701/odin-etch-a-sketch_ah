const canvas = document.querySelector('#canvas');
const elem = document.querySelectorAll('.element');

const clear = document.getElementById('clear-button');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(size){

}

function createGrid(size){
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let canvasElem = document.createElement('div');
        canvasElem.classList.add('element');

        canvasElem.addEventListener("mouseover", colorChange);
        canvasElem.addEventListener("mousedown", colorChange)
        canvas.insertAdjacentElement('beforeend', canvasElem);
    }
}

function clearGrid(){
    const elem = document.querySelectorAll('.element');
    elem.forEach((ele) =>{
        ele.classList.remove('clicked');
    });
}

function colorChange(e){
    if(e.type === 'mouseover' && !mouseDown)return;
    else{
        this.classList.add('clicked');
    }
}

let canvasSize = 16;
createGrid(canvasSize);
clear.onclick = () => clearGrid();