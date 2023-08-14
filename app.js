
//Initial grid
const gridWraper = document.querySelector(".gridWraper")
const gridContainer = document.querySelector(".gridContainer")
for (let i = 0; i < 256; i++){
    let newDiv = document.createElement("div")
    newDiv.classList.add("square")
    gridContainer.appendChild(newDiv)
}
const picker = document.querySelector(".picker")
let color = picker.value
picker.addEventListener("input", ()=>{
    color = picker.value
})

//Paint effect
function paint () {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = `${color}`
    })
});
}

//Erase effect 
function erase() {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "white"
    })
});
}

//Random effet
function rainbow() {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = `${randomColor()}`
    })
});
}

//Darkening effect
function darken() {
    const squares = document.querySelectorAll(".square")
    let i = 50
    squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        i++
        square.style.backgroundColor = `rgb(${255 - i},${255 - i},${255 - i})`
    })
});    
}

//Random Color Generator
function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

//Button prompt
let numOfSquares = 0
const newButton = document.querySelector(".newGrid")
newButton.addEventListener("click", ()=>{
numOfSquar = prompt("Enter a number of squares")
numOfSquares = numOfSquar ** 2
createGrid(numOfSquares)
})


//Create grid function
function createGrid(numOfSquares){
    const newGridContainer = document.createElement("div");
    newGridContainer.classList.add("gridContainer");
    gridWraper.replaceChildren(newGridContainer);

    for (let i = 0; i < numOfSquares; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newGridContainer.appendChild(newDiv);
    }
    newGridContainer.style.gridTemplateColumns = `repeat(${(numOfSquar)}, 1fr)`;
    newGridContainer.style.gridTemplateRows = `repeat(${(numOfSquar)}, 1fr)`;
}
