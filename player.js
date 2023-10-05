
class Player {
    constructor(name, piece) {
        this.name = name;
        this.piece = piece;
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
    placePiece(td, gameController, board) {

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
        } else {
            console.log('winner');
        }

        return true;
    }
}

export default Player
