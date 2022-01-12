import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsOdd } from './store';

function App() {
  const countValue = useSelector(state => state.value);
  const isOdd = useSelector(state => selectIsOdd(state));
  const dispatch = useDispatch();

  return (
    <div>
      <div>Value: {countValue}</div>
      <div>Odd? {String(isOdd)}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default App;
