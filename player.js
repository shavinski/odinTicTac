
class Player {
    constructor(name, piece) {
        this.name = name;
        this.piece = piece;
    }

    placePiece(td, gameController) {
        if (td.innerHTML !== "") {
            console.log('Silly goose this box is taken!')
            return;
        }

        td.innerHTML = this.piece;
        gameController.switchActivePlayer();
        return true;
    }
}

export default Player
