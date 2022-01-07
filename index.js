class CounterState {
  constructor({ value = 0 }) {
    this.state = { value };   
  }

  update(action) {
    switch (action.type) {
      case 'increment':
        state.value += 1;
      case 'decrement':
        state.value -= 1;
    }
  }

  get isOdd() {
    return this.state.value % 2 === 1;
  }
}