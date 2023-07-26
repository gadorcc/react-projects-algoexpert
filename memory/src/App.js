import React from 'react';
import { useState, useEffect} from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

  function Memory() {
  // Write your code here.
  const colors = shuffle(TILE_COLORS).concat(shuffle(TILE_COLORS));
  const colorsObject = {...colors}
  console.log(colorsObject)
  const value = Object.entries(colorsObject).map((v,k) => <div key={k} className="tile" value={v[1]}></div>)
  // const colorsClass = colorsObject.map((color) => <div key= {user.id}>{color.name}</div>)
  return (
    <>
      <h1>Memory</h1>
      <div className="board">
        {value}
      </div>
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

export default Memory;
