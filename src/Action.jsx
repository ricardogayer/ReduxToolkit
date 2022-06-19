import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from './store/slices/counter/counterSlice';

const Action = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <h1> Counter </h1>
        <button onClick={() => dispatch(incrementByAmount(2))}>Incrementar</button>
    </div>
  )
}

export default Action