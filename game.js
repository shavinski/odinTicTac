"use strict";

import Board from "./board.js";
import GameController from "./gameController.js";
import Player from "./player.js";

/////////////////////////// QUERY SELECTORS /////////////////////////////////
const boardContainer = document.querySelector(".board-container");
const startGame = document.querySelector('.start-game');

/////////////////////////// INITIALIZE GAME /////////////////////////////////

function startGameWithPlayerOrAi(e) {
    e.preventDefault();

    let playerOne = new Player('Player One', '❌');
    let playerTwo = null;

    const choice = document.getElementsByName('player-choice');

    for (let i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            playerTwo = choice[i].value === 'human' ? new Player('Player Two', '⭕') : new Player('AI', '⭕');
            console.log(playerTwo);
            const board = new Board();
            const gameController = new GameController(playerOne, playerTwo);
            gameController.updateStartScreen();
            board.createBoard(boardContainer, gameController, playerOne, playerTwo);
        }
    }
}

startGame.addEventListener('click', startGameWithPlayerOrAi)


