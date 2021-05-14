let player1 = true; //player 1 is X
let play = true;

document.getElementById("1x1").addEventListener("click", playerturn);
document.getElementById("1x2").addEventListener("click", playerturn);
document.getElementById("1x3").addEventListener("click", playerturn);
document.getElementById("2x1").addEventListener("click", playerturn);
document.getElementById("2x2").addEventListener("click", playerturn);
document.getElementById("2x3").addEventListener("click", playerturn);
document.getElementById("3x1").addEventListener("click", playerturn);
document.getElementById("3x2").addEventListener("click", playerturn);
document.getElementById("3x3").addEventListener("click", playerturn);



function playerturn() {
    if (this.innerHTML == ''){
        if (play) {
            if (player1) {
                this.innerHTML = 'X';
                player1 = false;
            }
            else {
                this.innerHTML = 'O';
                player1 = true;
            }
        }
    }
    checkwin();
}

function checkwin() {
    grid = document.querySelectorAll('#myTable td');
    //check vert
    let i = 0;
    for (i = 0; i < 3; i++) {
        if (grid[i].innerHTML != ''){
            if (grid[i].innerHTML === grid[i+3].innerHTML && grid[i+3].innerHTML === grid[i+6].innerHTML){
                checkWinner(i, i, i+3, i+6);
            }
        }
    }
    //check horizontal
    for (i = 0; i < 7; i += 3) {
        if (grid[i].innerHTML != ''){
            if (grid[i].innerHTML === grid[i+1].innerHTML && grid[i+1].innerHTML === grid[i+2].innerHTML) {
                checkWinner(i, i, i+1, i+2);
            }
        }
    }
    //diagonal down
    if (grid[0].innerHTML != ''){
        if (grid[0].innerHTML == grid[4].innerHTML && grid[4].innerHTML == grid[8].innerHTML) {
            checkWinner(0, 0, 4, 8);
        }
    }
    //diagonal up
    if (grid[2].innerHTML != ''){
        if (grid[2].innerHTML == grid[4].innerHTML && grid[4].innerHTML == grid[6].innerHTML) {
            checkWinner(2, 2, 4, 6);
        }
    }
}

function checkWinner(input, a, b, c){
    if (grid[input].innerHTML === 'X'){
        document.getElementById("title").innerText = "Player 1 Wins!";
        background(a, b, c)
        play = false;
    } else {
        document.getElementById("title").innerText = "Player 2 Wins!";
        background(a, b, c)
        play = false;
    }
}

function background(a, b, c){
    grid[a].classList.add("winner");
    grid[b].classList.add("winner");
    grid[c].classList.add("winner");
}

document.getElementById("reset").addEventListener("click", reset);
function reset() {
    document.querySelectorAll('#myTable td').forEach(e => e.innerHTML = "");
    document.querySelectorAll('#myTable td').forEach(e => e.classList.remove("winner"));
    document.getElementById("title").innerText = "Tic Tac Toe"
    player1 = true;
    play = true;
}