
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
     * @returns 
     * Returns true
     *      if the piece has been successfully placed
     * 
     * If a player places a piece on an spot that has a piece already
     *      return nothing in order to exit function
     */

    placePiece(td, gameController, board) {
        if (td.innerHTML !== "") {
            console.log('Silly goose this box is taken!')
            return;
        }

        td.innerHTML = this.piece;
        const [x, y] = td.className.split('-');
        board[x][y] = this.piece

        gameController.switchActivePlayer();
        gameController.determineWinOrTie(board);

        return true;
    }
}

export default Player
