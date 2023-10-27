/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useEffect, useState } from 'react';

/**
 * Exercise: Missing reactivity
 * 
 * Description: We want to provide users a functionality to input a number and get back to them
 * with whether that number is even or odd. This should be done automatically every time the
 * user changes the value of the input.
 * 
 * Your job is:
 *  1. Fix the logic so that the odd/even result is displayed anytime there's a change in the
 *     input value
 */

function MissingReactivity() {
  const [number, setNumber] = useState('0');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (number % 2 === 0) {
      setMessage(`number ${number} is even`);
    } else {
      setMessage(`number ${number} is odd`);
    }
  }, []);

  const onNumberChange = (event) => {
    setNumber(event.target.value);
  }

  const onReset = useCallback(() => {
    setMessage(`Input value removed, previous value: ${number}`)

    setNumber('0');
  }, []);

  return (
    <div className="home-wrapper" style={{ width: 500 }}>
      <p>Input a number to know if it is even or odd</p>
      <div>
        <input onChange={onNumberChange} value={number} />
        <button onClick={onReset}>Reset</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default MissingReactivity;
