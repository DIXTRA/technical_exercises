import { useState } from 'react';

const veryExpensiveFunction = (n) => `<calculated value for ${n}>`;

function TimeConsumingOperation() {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(true);

  const value = veryExpensiveFunction(counter);

  const onIncrement = () => setCounter(counter + 1);
  const toggleActive = () => setActive(!active);

  return (
    <div className="home-wrapper" style={{ width: 500 }}>
      <h2 className={active ? 'active' : ''}>{value}</h2>
      <button onClick={onIncrement}>Increment</button>
      {' | '}
      <button onClick={toggleActive}>Toggle Active</button>
    </div>
  );
}

export default TimeConsumingOperation;
