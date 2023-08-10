
//Initial grid
const gridContainer = document.querySelector(".gridContainer")
for (let i = 0; i < 256; i++){
    let newDiv = document.createElement("div")
    newDiv.textContent = "HO"
    newDiv.classList.add("square")
    gridContainer.appendChild(newDiv)
}

//Hover effect
const squares = document.querySelectorAll(".square")
squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.classList.add("hovered")
    })
});

//Button prompt
const newGrid = document.querySelector(".newGrid")
newGrid.addEventListener("click", ()=>{
    prompt("Enter a number of squares")
})