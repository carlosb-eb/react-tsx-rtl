import React, { useState } from 'react';

export const App = () => {
  const name: string = 'Stateful button example';

  const [count, setCount] = useState<number>(0);

  const handleClick = (e) => {
    const result = count + 1;
    setCount(result);
    console.warn('callback from parent triggered', result);
  };

  return (
    <div>
      <h1>React TSX Starter</h1>
      <p>It contains:</p>
      <ul>
        <li>React 18</li>
        <li>Typescript</li>
        <li>React testing library</li>
      </ul>
      <button onClick={handleClick}>
        {name} - You clicked me {count} times
      </button>
    </div>
  );
};
