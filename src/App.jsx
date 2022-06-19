import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Action from './Action';
import Display from './Display';
import { decrement, increment } from './store/slices/counter/counterSlice';

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          disabled={isLoading}
        >
          Decrement
        </button>
      </div>
      <br/>

      <hr/>
      <Display/>
      <br/>

      <br/>
     
      <hr/>
      <Action/>

    </>
  )
}

export default App;