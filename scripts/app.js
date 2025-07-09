function init(){
    //All our code goes here
    const gridElem = document.querySelector('.grid')
    function createGrid(){
        //For every cell create a div
        //Append this to our grid
        for (let i = 0; i < 100; i++){
            const cell = document.createElement('div')
            cell.textContent = i
            gridElem.appendChild(cell)
        }
    }

    createGrid()





}

document.addEventListener('DOMContentLoaded',init);