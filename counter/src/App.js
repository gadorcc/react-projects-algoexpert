import React from 'react';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick = {() => setValue(value + 1)}>Increment</button>
      <button onClick = {() => setValue(value -1)}>Decrement</button>
    </>
  );
}
