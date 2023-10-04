"use strict";

import Board from "./board.js";
import GameController from "./gameController.js";
import Player from "./player.js";

/////////////////////////// QUERY SELECTORS /////////////////////////////////
const boardContainer = document.querySelector(".board-container");



/////////////////////////// INITIALIZE GAME /////////////////////////////////
const board = new Board();
const gameController = new GameController();

const playerOne = new Player('Player One', 'X');
const playerTwo = new Player('Player Two', 'O');
console.log(playerOne, playerTwo);

board.createBoard(boardContainer, gameController, playerOne, playerTwo);

// const tdList = document.querySelectorAll('.game-board td');

// for (let i = 0; i < tdList.length; i++) {
//     const boxCoordinate = tdList[i].className
//     const x = boxCoordinate[0];
//     const y = boxCoordinate[2];

//     tdList[i].addEventListener('click', () => {
//         if (tdList[i].innerHTML !== "") {
//             console.log('Silly goose this box is taken!')
//             return;
//         } else if (ACTIVE_PLAYER === 'playerOne') {
//             tdList[i].innerHTML = 'X'
//             board.board[x][y] = 'X'
//         } else {
//             tdList[i].innerHTML = 'O'
//             board.board[x][y] = 'O'
//         }
//         gameController.switchActivePlayer();
//         ACTIVE_PLAYER = gameController.activePlayer
//         console.log(ACTIVE_PLAYER, board);
//     })
// }

// going to want a player 


// going to need a playerController 