const canvas = document.querySelector('#canvas');
const elem = document.querySelectorAll('.element');

const clear = document.getElementById('clear-button');
const eraser = document.getElementById('eraser-button');
const change_size = document.getElementById('change-size-button');
const rainbow = document.getElementById('rainbow-button');

let DEFAULT_SIZE = 16;
let color = 'black';
let mouseDown = false;
let colorIndicator = document.getElementById('color-indicator');

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

        canvasElem.style.border = '';
        canvasElem.addEventListener("mouseover", colorChange);
        canvasElem.addEventListener("mousedown", colorChange)
        canvas.insertAdjacentElement('beforeend', canvasElem);
    }
}

function clearGrid(){
    const elem = document.querySelectorAll('.element');
    elem.forEach((ele) =>{
        ele.style.backgroundColor = 'white';
    });
    rainbow.classList.remove('button-active');
    color = 'black';
}

function changeSize(){
    let size = prompt("Select a size to make the canvas");
    DEFAULT_SIZE = size;
    clearGridHelper();
    createGrid(DEFAULT_SIZE);
}

function colorChange(e){
    if(e.type == 'mouseover' && !mouseDown)return;

    if(color === 'rainbow' && mouseDown){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`

    }else if(color === 'eraser' && mouseDown){
        this.style.backgroundColor = 'white';
        
    }else{
        this.style.backgroundColor = 'black'

    }
}

function eraseCanvasElement(){
    eraser.classList.toggle('button-active');
    rainbow.classList.remove('button-active');
    color = 'eraser';
    console.log(eraser.className);
}

function sizeChange(){
    this.gridTemplateColumns = '2fr';
    this.gridTemplateRows = '2fr';
}

function rainbowColor(){  
    rainbow.classList.toggle('button-active');
    eraser.classList.remove('button-active');
    color = 'rainbow';
    console.log(rainbow.className);
}


createGrid(DEFAULT_SIZE);

clear.onclick = () => clearGrid();
change_size.onclick = () => changeSize();
eraser.onclick = () => eraseCanvasElement();
rainbow.onclick = () => rainbowColor();