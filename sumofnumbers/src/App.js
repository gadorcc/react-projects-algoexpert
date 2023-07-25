import React from 'react';
import { useState } from 'react';

export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  function handleClick() {
    let total = Number(number1) + Number(number2);
    setTotal(total)
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input onChange ={e => setNumber1(e.target.value)} placeholder="First Number" type="number" />
      <input onChange = {e => setNumber2(e.target.value)} placeholder="Second Number" type="number" />

      <button onClick = {handleClick}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
}
