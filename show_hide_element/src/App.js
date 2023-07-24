import React from 'react';
import { useState } from 'react';

export default function App() {

  const [toggleActive, setToggleActive] = useState(true);

  function handleClick () {
    if (toggleActive) {
      setToggleActive(false);
    }else{
      setToggleActive(true);
    }

  }

  return (
    <>
      <button onClick= {handleClick}>Hide Element Below</button>

      {toggleActive ? (<div>Toggle Challenge</div>) : null}

    </>
  );
}
