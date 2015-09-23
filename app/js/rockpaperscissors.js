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
    if (move == true) {
        move = move;
    } else if (move == null) {
        move = getInput ();
        return move;
    } else {
        move = getInput ();
        return move;
    }
}

function getComputerMove(move) {
     if (move == true) {
        move = move;
    } else if (move == null) {
        move = randomPlay;
        return move;
    } else {
        move = randomPlay;
        return move;
    }   
}

function getWinner(playerMove,computerMove) {
    var winner;
    for (playerMove = true) {
        switch (playerMove) {
            case computerMove:
                winner = 'tie';
                break;
            case 'rock'
                if (computerMove == 'scissors') {
                    winner = 'player';
                } else { 
                    winner = 'computer';
                } break;
            case 'scissors'
                if (computerMove == 'paper') {
                    winner = 'player';
                } else { 
                    winner = 'computer';
                } break;
            case 'paper':
                if (computerMove == 'rock') {
                    winner = 'player';
                } else { 
                    winner = 'computer';
                } break;
        }
    } return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

