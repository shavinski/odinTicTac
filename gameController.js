"use strict"

class GameController {
    constructor(p1, p2) {
        this.players = [p1, p2]
        this.activePlayer = this.players[0].name;
        this.winner = null;
        this.message = ''
    }

    updateMessageBox() {
        const message = document.querySelector('.active-message');
        message.innerHTML = `It is ${this.activePlayer} turn`

        if (!this.winner) {
            message.innerHTML = `It is ${this.activePlayer}'s turn`
        } else {
            message.innerHTML = this.winner !== 'Tie' ? `${this.winner} has won!` : `It is a tie!`
        }

    }

    /**
     * Responsible for switching active player after 
     */
    switchActivePlayer() {
        this.activePlayer = this.activePlayer === this.players[0].name ? this.players[1].name : this.players[0].name;
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
                this.winner = board[i][0] === this.players[0].piece ? this.players[0].name : this.players[1].name;
                return;
            }

            if (
                board[0][i] !== null &&
                board[0][i] === board[1][i] &&
                board[1][i] === board[2][i]
            ) {
                this.winner = board[0][i] === this.players[0].piece ? this.players[0].name : this.players[1].name;
                return;
            }
        }

        if (
            board[0][0] !== null &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            this.winner = board[0][0] === this.players[0].piece ? this.players[0].name : this.players[1].name;
            return;
        }

        if (
            board[0][2] !== null &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            this.winner = board[0][2] === this.players[0].piece ? this.players[0].name : this.players[1].name;
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