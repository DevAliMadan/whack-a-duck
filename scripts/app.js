function init(){
    //All our code goes here
    const gridElem = document.querySelector('.grid')

    const cells = []

    const gridWidth = 10

    const numberCells = gridWidth * gridWidth
     
    let duckPositon = [90]


    function play(){
        setInterval(() => {
            removeDuck()
            duckPositon = Math.floor(Math.random()* numberCells)
            addDuck()
        }, 2000);
    }
    function addDuck(){
        cells[duckPositon].classList.add('duck')
    }

    function removeDuck() {
        cells[duckPositon].classList.remove('duck')
    }
    
    function createGrid(){
        //For every cell create a div
        //Append this to our grid
        for (let i = 0; i < numberCells; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }

    createGrid()
    addDuck()
    play()



}

document.addEventListener('DOMContentLoaded',init);