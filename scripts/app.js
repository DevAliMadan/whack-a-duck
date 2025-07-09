function init(){
    //All our code goes here
    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')

    const cells = []

    const gridWidth = 10

    const numberCells = gridWidth * gridWidth
     
    let duckPositon = [1]

    let score = 0


    function play(){
        setInterval(() => {
            removeDuck()
            //Ramdomizer
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
    function handleClick(event){
        console.log("runs")
        if (event.target.classList.contains('duck')){
            score += 10
            scoreElem.textContent = `Your score is ${score}`
            console.log(score)
        }
    }
    function createGrid(){
        //For every cell create a div
        //Append this to our grid
        for (let i = 0; i < numberCells; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i
            cell.addEventListener('click', handleClick)
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