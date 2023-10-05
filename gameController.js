"use strict"

class GameController {
    constructor() {
        this.activePlayer = 'playerOne';
        this.winner = null;
    }

    switchActivePlayer() {
        this.activePlayer = this.activePlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
    }

    determineWinOrTie(board) {
        console.log('determineWinOrTie ran once')
        if (board[0][0] === '❌' && board[0][1] === '❌' && board[0][2] === '❌') {
            this.winner = 'Player One';
            console.log('winner:', this.winner)
        }
    }
}

export default GameController