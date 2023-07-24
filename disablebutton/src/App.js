import React from 'react';
import { useState } from 'react';

export default function App() {

  const [data, setData] = useState("");


  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={e => setData(e.target.value)}/>
      <button disabled={!data}>Submit</button>
      {/* <button disabled={data ? false : true }>Submit</button> */}

    </>
  );
}
