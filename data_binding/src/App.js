import React from 'react';
import { useState } from 'react';


export default function App() {

  const [data, setData] = useState("");


  return (
    <>
      <input type="text" onChange ={e => setData(e.target.value)} placeholder="Enter Text" />
      <p>{data}</p>
    </>
  );
}
