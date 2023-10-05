"use strict"

class GameController {
    constructor() {
        this.activePlayer = 'playerOne';
        this.winner = null;
    }

    /**
     * Responsible for switching active player after 
     */

    switchActivePlayer() {
        this.activePlayer = this.activePlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
    }

    /**
     * Determines which player has won the current game of tic tac toe 
     * 
     * @param {Array} board - Board represents an array of arrays which is the game board representing where player pieces are located
     * 
     */

    determineWinOrTie(board) {
        console.log('determineWinOrTie ran once')
        if (board[0][0] === '❌' && board[0][1] === '❌' && board[0][2] === '❌') {
            this.winner = 'Player One';
            console.log('winner:', this.winner)
            return;
        }
    }
}

export default GameController