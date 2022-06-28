import React, { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const accumulate = (number: number) => {
    setCounter(counter + number);
  }

  return {
    counter, accumulate
  }
}
