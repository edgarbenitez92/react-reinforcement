import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

  const { counter, accumulate } = useCounter();

  return (
    <>
      <h3>Counter Hook: <small>{counter}</small></h3>

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
