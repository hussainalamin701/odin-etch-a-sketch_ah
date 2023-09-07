let DEFAULT_COLOR = '#43da86';
let DEFAULT_MODE = 'color';

const canvas = document.querySelector('#canvas');
const elem = document.querySelectorAll('.element');

const COLOR_PICKER = document.getElementById('color-picker');
const clear = document.getElementById('clear-button');
const eraser = document.getElementById('eraser-button');
const change_size = document.getElementById('change-size-button');
const rainbow = document.getElementById('rainbow-button');
const color_ = document.getElementById('color-button');

let DEFAULT_SIZE = 16;
let color = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

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

function setCurrentColor(newColor){
    color = newColor;
}

function setMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
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
    this.style.backgroundColor = color;
}

function changeSize(){
    let size = prompt("Select a size to make the canvas");
    DEFAULT_SIZE = size;
    clearGridHelper();
    createGrid(DEFAULT_SIZE);
}

function colorChange(e){
    if(e.type === 'mouseover' && !mouseDown)return;
    if(currentMode === 'rainbow'){
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else if(currentMode === 'eraser'){
        e.target.style.backgroundColor = '#fefefe';
    }else if(currentMode === 'color'){
        e.target.style.backgroundColor = color;
    }
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbow.classList.remove('button-active')
    } else if(currentMode === 'color'){
        color_.classList.remove('button-active')
    } else if(newMode === 'eraser'){
        eraser.classList.remove('button-active')
    }

    if (newMode === 'rainbow') {
      rainbow.classList.add('button-active')
    } else if(newMode === 'color'){
        color_.classList.add('button-active')
        eraser.classList.remove('button-active')
    } else if(newMode === 'eraser'){
        eraser.classList.add('button-active')
        color_.classList.remove('button-active')
    }
}


createGrid(DEFAULT_SIZE);

COLOR_PICKER.oninput = (e) => setCurrentColor(e.target.value);
clear.onclick = () => clearGrid();
change_size.onclick = () => changeSize();

color_.onclick = () => setMode('color');
eraser.onclick = () => setMode('eraser');
rainbow.onclick = () => setMode('rainbow');

window.onload = () => {
    activateButton(DEFAULT_MODE)
  }