import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Action from './Action';
import Display from './Display';
import { decrement, increment } from './store/slices/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <br/>
      <br/>
      <hr/>
      <Display/>
      <br/>
      <br/>
      <hr/>
      <Display/>

      <br/>
      <br/>
      <hr/>
      <Action/>

    </div>
  )
}

export default App;