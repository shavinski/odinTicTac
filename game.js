"use strict";

import Board from "./board.js";
import GameController from "./gameController.js";
import Player from "./player.js";

/////////////////////////// QUERY SELECTORS /////////////////////////////////
const boardContainer = document.querySelector(".board-container");



/////////////////////////// INITIALIZE GAME /////////////////////////////////
const board = new Board();

const playerOne = new Player('Player One', '❌');
const playerTwo = new Player('Player Two', '⭕');

const gameController = new GameController(playerOne, playerTwo);


board.createBoard(boardContainer, gameController, playerOne, playerTwo);
