function init(){
    //All our code goes here
    const gridElem = document.querySelector('.grid')

    const cells = []

    const gridWidth = 10

    const numberCells = gridWidth * gridWidth

    function createGrid(){
        //For every cell create a div
        //Append this to our grid
        for (let i = 0; i < numberCells; i++){
            const cell = document.createElement('div')
            cell.classList.add('duck')
            cell.textContent = i
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }

    createGrid()





}

document.addEventListener('DOMContentLoaded',init);