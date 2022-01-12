// TODO
// - Build next board given row & col
// - Find winner

// Utilities
const PLAYERS = {
  one: 'one',
  two: 'two',
  noWinner: 'noWinner',
};

class TicTacToe {
  // State fields
  constructor() {
    this.turn = 0;
    this.board = Array(3).fill(null).map(() => Array(3));
    this.winner = null;
  }

  // Derived state
  get currentPlayer() {
    return this.turn % 2 === 0 ? PLAYERS.one : PLAYERS.two;
  }

  // Actions
  // @move args may be assumed to be valid (available and within range)
  move(row, col) {
    // Set the board state
    // Check for winner
    // Increment turn
    const nextBoard = buildNextBoard(this.state.board, row, col);
    const winner = getWinner(nextBoard);

    this.board = nextBoard;
    this.winner = winner;
    this.turn += 1;
  }

  // Utility functions
  static buildNextBoard(board, row, col) {
    return [];
  }

  static getWinner(board) {
    return null;
  }
}
