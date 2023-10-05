
class Player {
    constructor(name, piece) {
        this.name = name;
        this.piece = piece;
    }

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
