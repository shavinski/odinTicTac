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
     * Determines which player has won the current game of tic tac toe or if its a tie
     * 
     * @param {Array} board - Board represents an array of arrays which is the game board representing where player pieces are located
     * 
     */
    determineWinOrTie(board) {

        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] !== null &&
                board[i][0] === board[i][1] &&
                board[i][1] === board[i][2]
            ) {
                this.winner = board[i][0] === '❌' ? 'Player One' : 'Player Two';
                return;
            }

            if (
                board[0][i] !== null &&
                board[0][i] === board[1][i] &&
                board[1][i] === board[2][i]
            ) {
                this.winner = board[0][i] === '❌' ? 'Player One' : 'Player Two';
                return;
            }
        }

        if (
            board[0][0] !== null &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            this.winner = board[0][0] === '❌' ? 'Player One' : 'Player Two';
            return;
        }

        if (
            board[0][2] !== null &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            this.winner = board[0][2] === '❌' ? 'Player One' : 'Player Two';
            return;
        }

        // Check for a tie (if the board is full)
        if (board.flat().every((cell) => cell !== null)) {
            this.winner = "Tie";
            return;
        }

    }
}

export default GameController