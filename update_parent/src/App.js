import React from 'react';
import { useState } from 'react';

function Child({updatePage}) {
  const newText = "I have changed the text";

  const handleClick = () => {
    updatePage(newText);
  }
  return (
    <>
      <div>Child</div>
      <button onClick={handleClick}>Change Parent Value</button>
    </>
  );
}

export default function Parent() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  const updatePage = newText => {
    setValue(newText);
  };

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child updatePage={updatePage}/>
      </div>
    </>
  );
}
