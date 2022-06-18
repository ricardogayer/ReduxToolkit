import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {

  const { value: count }  = useSelector((state) => state.counter)

  return (
    <div>
        <h1> Counter </h1>
        <h2> { count } </h2>
    </div>
  )
}

export default Display