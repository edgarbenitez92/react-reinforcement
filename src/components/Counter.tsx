import React, { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const accumulate = (number: number) => {
    setCounter(counter + number);
  }

  return (
    <>
      <h3>Counter: <small>{counter}</small></h3>

      <button onClick={() => accumulate(1)} className='btn btn-primary'>
        +1
      </button>
      &nbsp;
      <button onClick={() => accumulate(-1)} className='btn btn-primary'>
        -1
      </button>
    </>
  )
}
