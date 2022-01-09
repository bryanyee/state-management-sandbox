import { createStore } from 'redux';

const PLAYERS = {
  one: 'one',
  two: 'two',
  noWinner: 'noWinner',
};

const initialState = {
  turn: 0,
  board: Array(3).fill(null).map(() => Array(3)),
  winner: null,
  error: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'move':
      // Check valid move - `winner` isn't populated, position is within board range and not yet selected
      // - If invalid, add error message and return early
      // - If valid, reset error message and continue
      // Create next board state
      // Increment turn
      // Check for winner
      return { ...state };
    default:
      return state;
  }
}

const store = createStore(appReducer);

// Selectors
function selectCurrentPlayer(state) {
  return state.turn % 2 === 0 ? PLAYERS.one : PLAYERS.two;
}



class TicTacToe {
  constructor() {
    this.turn = 0;
    this.board = Array(3).fill(null).map(() => Array(3));
    this.winner = null;
    this.error = null;
  }
}