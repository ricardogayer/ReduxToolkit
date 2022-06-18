import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from './store/slices/counter/counterSlice';

const Action = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <h1> Counter </h1>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
    </div>
  )
}

export default Action