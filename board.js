"use strict";

class Board {
    constructor() {
        this.height = 3;
        this.width = 3;
        this.board = [];
    }


    /**
     * Creates player board by creating a table with rows and tds 
     * 
     * @param {HTMLElement} boardContainer - HTML Element where the dynamically created board will be appended 
     * @param {Object} gameController - The game controller object responsible for keeping track of active player and winner
     * @param {Object} playerOne - The object representing player one
     * @param {Object} playerTwo - The object representing player two
     * 
     */
    createBoard(boardContainer, gameController, playerOne, playerTwo) {
        const board = document.createElement('table')
        board.className = 'game-board'
        board.addEventListener('click', (e) => {
            const td = e.target
            if (gameController.winner !== null) {
                gameController.updateMessageBox();
                return;
            }

            if (gameController.activePlayer === gameController.players[0].name) {
                playerOne.humanMakeMove(td, gameController, this.board);
            } else {
                if (playerTwo.isAi) {
                    playerTwo.aiMakeMove(gameController, this.board)
                } else {
                    playerTwo.humanMakeMove(td, gameController, this.board);
                }

            }
            gameController.updateMessageBox();
        })


        gameController.updateMessageBox();

        for (let x = 0; x < this.width; x++) {
            const tr = document.createElement('tr');
            const row = [];

            for (let y = 0; y < this.height; y++) {
                row.push(null);
                const td = document.createElement('td');
                td.className = `${x}-${y}`;
                tr.appendChild(td);
            }

            this.board.push(row);
            board.appendChild(tr);
        }

        boardContainer.appendChild(board);
    }
}

export default Board;