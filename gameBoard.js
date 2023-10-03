"use strict";

const boardContainer = document.querySelector(".board-container");

class board {
    constructor() {
        this.height = 3;
        this.width = 3;
    }

    createBoard() {
        const board = document.createElement('table')
        board.className = 'game-board'

        for (let x = 0; x < this.width; x++) {
            const tr = document.createElement('tr');

            for (let y = 0; y < this.height; y++) {
                const td = document.createElement('td');
                td.className = `${x}-${y}`;
                td.addEventListener('click', () => {
                    td.style.background = 'red'
                })
                tr.appendChild(td);
            }

            board.appendChild(tr);
        }

        boardContainer.appendChild(board);
    }
}

export default board;