"use strict";



class Board {
    constructor() {
        this.height = 3;
        this.width = 3;
        this.board = [];
    }

    createBoard(boardContainer, gameController, playerOne, playerTwo) {
        const board = document.createElement('table')
        board.className = 'game-board'

        for (let x = 0; x < this.width; x++) {
            const tr = document.createElement('tr');
            const row = [];

            for (let y = 0; y < this.height; y++) {
                row.push(null);
                const td = document.createElement('td');
                td.className = `${x}-${y}`;

                td.addEventListener('click', () => {
                    console.log(gameController.activePlayer);
                    if (gameController.activePlayer === 'playerOne') {
                        playerOne.placePiece(td, gameController);
                    } else {
                        playerTwo.placePiece(td, gameController);
                    }
                });

                tr.appendChild(td);
            }

            this.board.push(row);
            board.appendChild(tr);
        }

        boardContainer.appendChild(board);
    }
}

export default Board;