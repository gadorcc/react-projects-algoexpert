import React from 'react';
import { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = (bill * (tip/100)).toFixed(2)
  const tipPerPerson = (totalTip/people).toFixed(2)


  return (
    <>
      <label>
        Bill
        <input
          value={bill}
          onChange={e => setBill(e.target.value)}
          type="number"/>
      </label>


      <label>
        Tip Percentage
      <input value={tip}
          onChange={e => setTip(e.target.value)}
          type="number"/>
      </label>

      <label>Number of People
      <input value={people}
          onChange={e => setPeople(e.target.value)}
          type="number"/>
      </label>
      <p>Total Tip: {totalTip >0 ? `$${totalTip}` : '-'}</p>
      <p>Tip Per Person: {tipPerPerson >0 ? `$${tipPerPerson}` : '-'}</p>

    </>
  );
}
