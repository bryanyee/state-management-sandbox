const { createStore } = require('redux');

// TODO
// - Build next board given row & col
// - Find winner

// Utilities
const PLAYERS = {
  one: 'one',
  two: 'two',
  noWinner: 'noWinner',
};

function buildNextBoard(board, row, col) {
  return [];
}

function getWinner(board) {
  return null;
}

// State fields
const initialState = {
  turn: 0,
  board: Array(3).fill(null).map(() => Array(3)),
  winner: null,
};

// Actions
// @move args may be assumed to be valid (available and within range)
function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'move':
      const { row, col } = action.payload;
      // Create next board state
      // Check for winner
      // Increment turn
      const nextBoard = buildNextBoard(state.board, row, col);
      const winner = getWinner(nextBoard);
      return {
        ...state,
        board: nextBoard,
        turn: state.turn + 1,
        winner: winner,
      };
    default:
      return state;
  }
}

const store = createStore(appReducer);

// Derived state
function selectCurrentPlayer(state) {
  return state.turn % 2 === 0 ? PLAYERS.one : PLAYERS.two;
}
