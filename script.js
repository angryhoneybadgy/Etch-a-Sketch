const container = document.querySelector("#container");
let gridNumber = 16;
const WIDTH = container.clientWidth;
const HEIGHT = container.clientHeight;

function createGrid(gridNumber)
{
    let grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i=0; i<gridNumber; i++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j=0; j<gridNumber; j++)
        {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.height = (HEIGHT/gridNumber) + "px";
            cell.style.width = (WIDTH/gridNumber) + "px";
            cell.style.backgroundColor = "white";
            cell.addEventListener("mouseover", function(e){
                cell.classList.add("hovered-cell");
            });
            row.appendChild(cell);
        }
        row.style.height = (HEIGHT/gridNumber) + "px";
        let clearDiv = document.createElement('div');
        clearDiv.classList.add('clear');
        row.appendChild(clearDiv);
        grid.appendChild(row);
    }
    container.appendChild(grid);
}
createGrid(gridNumber);

function clearGrid()
{
    gridNumber = prompt("Enter number N, which will define new grid (N x N)");
    if (gridNumber && gridNumber>=1 && gridNumber<=100)
    {
        let currentGrid = document.querySelector(".grid");
        container.removeChild(currentGrid);
        createGrid(gridNumber);
    }
    else alert("Number must be integer and between 1 and 100");
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(e){
    clearGrid();
});