let game_cell = document.querySelectorAll(".game-cell");
let gameBtn = document.querySelector(".new-game-btn");
let winner = document.querySelector(".player-name");

let entry = "o";
let marked = new Array();
console.log(marked);


function checkGameResult(){
    if (((game_cell[0].innerText === game_cell[1].innerText) && (game_cell[1].innerText === game_cell[2].innerText) && (game_cell[2].innerText === "x"))  || 
        ((game_cell[3].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[5].innerText) && (game_cell[5].innerText === "x")) ||
        ((game_cell[6].innerText === game_cell[7].innerText) && (game_cell[7].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "x")) ||

        ((game_cell[0].innerText === game_cell[3].innerText) && (game_cell[3].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "x")) ||
        ((game_cell[1].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[7].innerText) && (game_cell[7].innerText === "x")) ||
        ((game_cell[2].innerText === game_cell[5].innerText) && (game_cell[5].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "x")) ||
        
        ((game_cell[0].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "x")) ||
        ((game_cell[2].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "x"))
    ){
        winner.innerText = "Winner - Player 2";
        winner.classList.add("active");
        stopGame();

        if ((game_cell[0].innerText === game_cell[1].innerText) && (game_cell[1].innerText === game_cell[2].innerText) && (game_cell[2].innerText === "x")){
            game_cell[0].classList.add("win-back");
            game_cell[1].classList.add("win-back");
            game_cell[2].classList.add("win-back");
        }
        else if ((game_cell[3].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[5].innerText) && (game_cell[5].innerText === "x")){
            game_cell[3].classList.add("win-back");
            game_cell[4].classList.add("win-back");
            game_cell[5].classList.add("win-back");
        }
        else if ((game_cell[6].innerText === game_cell[7].innerText) && (game_cell[7].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "x")){
            game_cell[6].classList.add("win-back");
            game_cell[7].classList.add("win-back");
            game_cell[8].classList.add("win-back");
        }

        else if ((game_cell[0].innerText === game_cell[3].innerText) && (game_cell[3].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "x")){
            game_cell[0].classList.add("win-back");
            game_cell[3].classList.add("win-back");
            game_cell[6].classList.add("win-back");
        }
        else if ((game_cell[1].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[7].innerText) && (game_cell[7].innerText === "x")){
            game_cell[1].classList.add("win-back");
            game_cell[4].classList.add("win-back");
            game_cell[7].classList.add("win-back");
        }
        else if ((game_cell[2].innerText === game_cell[5].innerText) && (game_cell[5].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "x")){
            game_cell[2].classList.add("win-back");
            game_cell[5].classList.add("win-back");
            game_cell[8].classList.add("win-back");
        }
        
        else if ((game_cell[0].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "x")){
            game_cell[0].classList.add("win-back");
            game_cell[4].classList.add("win-back");
            game_cell[8].classList.add("win-back");
        }
        else if ((game_cell[2].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "x")){
            game_cell[2].classList.add("win-back");
            game_cell[4].classList.add("win-back");
            game_cell[6].classList.add("win-back");
        }
        
        
    }

    else if (((game_cell[0].innerText === game_cell[1].innerText) && (game_cell[1].innerText === game_cell[2].innerText) && (game_cell[2].innerText === "o"))  || 
    ((game_cell[3].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[5].innerText) && (game_cell[5].innerText === "o")) ||
    ((game_cell[6].innerText === game_cell[7].innerText) && (game_cell[7].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "o")) ||

    ((game_cell[0].innerText === game_cell[3].innerText) && (game_cell[3].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "o")) ||
    ((game_cell[1].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[7].innerText) && (game_cell[7].innerText === "o")) ||
    ((game_cell[2].innerText === game_cell[5].innerText) && (game_cell[5].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "o")) ||
    
    ((game_cell[0].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "o")) ||
    ((game_cell[2].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "o"))
){
    winner.innerText = "Winner - Player 1";
    winner.classList.add("active");
    stopGame();

    if ((game_cell[0].innerText === game_cell[1].innerText) && (game_cell[1].innerText === game_cell[2].innerText) && (game_cell[2].innerText === "o")){
        game_cell[0].classList.add("win-back");
        game_cell[1].classList.add("win-back");
        game_cell[2].classList.add("win-back");
    }
    else if ((game_cell[3].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[5].innerText) && (game_cell[5].innerText === "o")){
        game_cell[3].classList.add("win-back");
        game_cell[4].classList.add("win-back");
        game_cell[5].classList.add("win-back");
    }
    else if ((game_cell[6].innerText === game_cell[7].innerText) && (game_cell[7].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "o")){
        game_cell[6].classList.add("win-back");
        game_cell[7].classList.add("win-back");
        game_cell[8].classList.add("win-back");
    }

    else if ((game_cell[0].innerText === game_cell[3].innerText) && (game_cell[3].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "o")){
        game_cell[0].classList.add("win-back");
        game_cell[3].classList.add("win-back");
        game_cell[6].classList.add("win-back");
    }
    else if ((game_cell[1].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[7].innerText) && (game_cell[7].innerText === "o")){
        game_cell[1].classList.add("win-back");
        game_cell[4].classList.add("win-back");
        game_cell[7].classList.add("win-back");
    }
    else if ((game_cell[2].innerText === game_cell[5].innerText) && (game_cell[5].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "o")){
        game_cell[2].classList.add("win-back");
        game_cell[5].classList.add("win-back");
        game_cell[8].classList.add("win-back");
    }
    
    else if ((game_cell[0].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[8].innerText) && (game_cell[8].innerText === "o")){
        game_cell[0].classList.add("win-back");
        game_cell[4].classList.add("win-back");
        game_cell[8].classList.add("win-back");
    }
    else if ((game_cell[2].innerText === game_cell[4].innerText) && (game_cell[4].innerText === game_cell[6].innerText) && (game_cell[6].innerText === "o")){
        game_cell[2].classList.add("win-back");
        game_cell[4].classList.add("win-back");
        game_cell[6].classList.add("win-back");
    }
    
    
}
}

function stopGame(){
    for (let i=0; i<9; i++){
        if (!marked[i])
            marked[i] = true;
    }
}

for (let i=0; i<9; i++){
    game_cell[i].addEventListener("click", () => {
        if (!checkMarked(i)){
            game_cell[i].innerText = entry;
            checkGameResult();

            if (entry === "o")
            entry = "x";
            else 
            entry = "o";
        }
    
    })
}

function checkMarked(i){
    if (marked[i]){
        return true;
    }
    else{
        marked[i] = true;
        return false;
    }
}

gameBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    clearGame();
    entry = "o";
})

function clearGame(){
    winner.classList.remove("active");
    for (let i=0; i<9; i++){
        game_cell[i].innerText = "";
        marked[i] = false;
        if (game_cell[i].classList.contains("win-back")){
            game_cell[i].classList.remove("win-back");
        }
    }
}