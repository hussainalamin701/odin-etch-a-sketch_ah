const canvas = document.querySelector('#canvas');
const elem = document.querySelectorAll('.element');

const clear = document.getElementById('clear-button');
const eraser = document.getElementById('eraser-button');
const change_size = document.getElementById('change-size-button');

let DEFAULT_SIZE = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Section for my methods and functions
function clearGridHelper(){
    canvas.innerHTML = '';
}

function updateSize(size){
    DEFAULT_SIZE = size;
}

function createGrid(DEFAULT_SIZE){
    canvas.style.gridTemplateColumns = `repeat(${DEFAULT_SIZE}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${DEFAULT_SIZE}, 1fr)`;

    let numDivs = DEFAULT_SIZE * DEFAULT_SIZE;
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

function changeSize(){
    let size = prompt("Select a size to make the canvas");
    DEFAULT_SIZE = size;
    clearGridHelper();
    createGrid(DEFAULT_SIZE);
}

createGrid(DEFAULT_SIZE);
clear.onclick = () => clearGrid();
change_size.onclick = () => changeSize();