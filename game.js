"use strict";

import Board from "./board.js";
import GameController from "./gameController.js";
import Player from "./player.js";

/////////////////////////// QUERY SELECTORS /////////////////////////////////
const boardContainer = document.querySelector(".board-container");



/////////////////////////// INITIALIZE GAME /////////////////////////////////
const board = new Board();
const gameController = new GameController();

const playerOne = new Player('Player One', '❌');
const playerTwo = new Player('Player Two', '⭕');

// Pass in the container that holds the board, pass in gameController object to
// have access to the active player, pass in playerOne and playerTwo in order to 
// call the logic for placeing a piece on the board
board.createBoard(boardContainer, gameController, playerOne, playerTwo);

