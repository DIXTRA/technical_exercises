import { useCallback, useEffect, useState } from 'react';

function Exercise4() {
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

export default Exercise4;
