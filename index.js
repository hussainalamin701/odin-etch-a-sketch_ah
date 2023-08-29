const canvas = document.querySelector('#canvas');

let canvasSize = 32;
//Create a function that will apply everything onto the canvas

function createGrid(size){
    //Use for loops to go through 8 times
    for(let i = 0; i < size; i++){
        const canvasElem = document.createElement('div');
        canvasElem.style.width = '100px';
        canvasElem.style.height = '100px';
        canvasElem.style.backgroundColor = 'black';
    }
}

createGrid(8);