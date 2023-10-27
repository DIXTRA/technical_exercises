import {useEffect, useState} from 'react';

function Exercise3() {
  const [number, setNumber] = useState('0');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (number % 2 === 0) {
      setMessage(`El número ${number} par`);
    } else {
      setMessage(`El número  ${number} es impar`);
    }
  }, []);

  const onNumberChange = (event) => {
    setNumber(event.target.value);
  }

  return (
    <div className="home-wrapper" style={{ width: 500 }}>
      <p>Ingrese un numero para saber si es par o impar</p>
      <input onChange={onNumberChange} value={number} />
      <p>{message}</p>
    </div>
  );
}

export default Exercise3;
