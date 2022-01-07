import { createStore } from 'redux';

const initialState = {
  value: 0,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value += 1};
    case 'decrement':
      return { ...state, value: state.value -= 1};
    default:
      return state;
  }
}

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

function selectIsOdd(state) {
  return state.value % 2 === 1;
}

// Initial state
console.log('1. initial state', store.getState()); // { value: 0 }
console.log('1. isOdd', selectIsOdd(store.getState())); // false

// Increment
store.dispatch({ type: 'increment' });
console.log('2. state after increment', store.getState()); // { value: 1 }
console.log('2. isOdd', selectIsOdd(store.getState())); // true

// Decrement
store.dispatch({ type: 'decrement' });
console.log('3. state after decrement', store.getState()); // { value: 0 }
console.log('3. isOdd', selectIsOdd(store.getState())); // false

export {
  selectIsOdd,
};
