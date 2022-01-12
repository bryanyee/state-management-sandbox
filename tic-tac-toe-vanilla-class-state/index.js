class TicTacToe {
  constructor() {
    this.turn = 0;
    this.board = Array(3).fill(null).map(() => Array(3));
    this.winner = null;
    this.error = null;
  }
}
