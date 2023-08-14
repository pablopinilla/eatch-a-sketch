
//Initial grid
const gridWraper = document.querySelector(".gridWraper")
const gridContainer = document.querySelector(".gridContainer")
for (let i = 0; i < 256; i++){
    let newDiv = document.createElement("div")
    newDiv.textContent = "HO"
    newDiv.classList.add("square")
    gridContainer.appendChild(newDiv)
}

//Hover effect
function hover() {
const squares = document.querySelectorAll(".square")
squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.classList.add("hovered")
    })
});
}
hover()

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
    hover();
    //newDiv.style.width = `${1200/numOfSquares}px`
    //newDiv.style.height = `${1200/numOfSquares}px`
}
