function init(){
    //All our code goes here
    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')
    const audioElem = document.querySelector('#quack')

    const cells = []

    const gridWidth = 10

    const numberCells = gridWidth * gridWidth
     
    let duckPositon = [1]

    let score = 0

    let totalDuck = 0


    function endGame(){
        alert('Game ended, score: 0')
        score = 0
        totalDuck = 0
    }

    function play(){
        setInterval(() => {
            if (totalDuck < 10){
            removeDuck()
            //Ramdomizer
            duckPositon = Math.floor(Math.random()* numberCells)
            addDuck()
            }else {
                endGame()
            }

        },3000);
    }
    function addDuck(){
        cells[duckPositon].classList.add('duck')
        totalDuck++
    }


    function removeDuck() {
        cells[duckPositon].classList.remove('duck')
    }
    function handleClick(event){
        console.log("runs")
        if (event.target.classList.contains('duck')){
            audioElem.pause()
            audioElem.currentTime = 0
            score += 10
            //to update stuff
            scoreElem.textContent = `Your score is ${score}`
            audioElem.play()
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