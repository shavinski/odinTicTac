"use strict"

class GameController {
    constructor() {
        this.activePlayer = 'playerOne';
    }

    switchActivePlayer() {
        this.activePlayer = this.activePlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
    }

    determineWinOrTie() {

    }
}

export default GameController