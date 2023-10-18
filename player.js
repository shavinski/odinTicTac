
class Player {
    constructor(name, piece, isAi = false) {
        this.name = name;
        this.piece = piece;
        this.isAi = isAi;
    }

    _generateRandomCoordinate() {
        let row = Math.floor(Math.random() * 3);
        let column = Math.floor(Math.random() * 3)

        return [row, column]
    }

    /**
     * Place a player piece on the player 
     * 
     * @param {HTMLElement} td - The HTML element for the individual squares where a player is able to place a piece 
     * @param {Object} gameController  - The game controller object responsible for keeping track of active player and winner
     * @param {Array} board - Board represents an array of arrays which is the game board representing where player pieces are located
     * @returns {boolean} - Returns `true` if the piece is successfully placed; otherwise, returns nothing.
     * 
     */
    humanMakeMove(td, gameController, board) {

        if (td.innerHTML !== "") {
            console.log('Silly goose this box is taken!')
            return;
        }

        td.innerHTML = this.piece;
        const [x, y] = td.className.split('-');
        board[x][y] = this.piece

        gameController.determineWinOrTie(board)

        if (!gameController.winner) {
            gameController.switchActivePlayer(board);
            this.aiMakeMove
        }

        return true;
    }

    aiMakeMove(gameController, board) {
        let [row, column] = this._generateRandomCoordinate();
        let aiTd = document.getElementsByClassName(`${row}-${column}`);
        let gb = document.querySelector('.game-board');
        console.log('inside AI make move', aiTd);

        while (aiTd[0].innerHTML !== "") {
            [row, column] = this._generateRandomCoordinate();
            aiTd = document.getElementsByClassName(`${row}-${column}`)
        }

        aiTd[0].innerHTML = this.piece;
        board[row][column] = this.piece;

        gameController.determineWinOrTie(board)

        if (!gameController.winner) {
            gameController.switchActivePlayer(board);
        }

        return true;
    }
}

export default Player
