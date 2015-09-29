////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (prompt() === true) {
        if (prompt() == 'rock') {
            move = prompt();
            return move;
        } else if (prompt() == 'paper') {
            move = prompt();
            return move;
        } else if (prompt() == 'scissors') {
            move = prompt();
            return move;
        }
    } else {
        move = getInput();
        return move;  
    }
}
   
function getComputerMove(move) {
    if (prompt() === true) {
        if (prompt() == 'rock') {
            move = prompt();
            return move;
        } else if (prompt() == 'paper') {
            move = prompt();
            return move;
        } else if (prompt() == 'scissors') {
            move = prompt();
            return move;
        }
    } else {
        move = randomPlay();
        return move;  
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
        return winner;
    } else {
        switch (playerMove) {
            case 'rock':
                if (computerMove === 'scissors') {
                    winner = 'player';
                } else { 
                    winner = 'computer';
                } 
            case 'scissors':
                if (computerMove === 'paper') {
                    winner = 'player';
                } else { 
                    winner = 'computer';
                } 
            case 'paper':
                if (computerMove === 'rock') {
                    winner = 'player';
                } else { 
                    winner = 'computer';
                }
        }
    } 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    while ((playerWins <= 5) || (computerWins <= 5)) {
        var playerMove = getInput();
        var computerMove = randomPlay();
        winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins ++;
        } else if (winner === 'computer') {
            computerWins ++;
        } else {
            return 'tie';
        }
        console.log('Player choice ' + playerMove + 'vs. Computer choice' + computerMove);
        console.log('Player score ' + playerWins + 'vs. Computer score ' + computerWins);
    } return winner;
}
