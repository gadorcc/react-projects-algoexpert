import React from 'react';
import { useState, useEffect} from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

function Memory() {

  const colors = shuffle(TILE_COLORS).concat(shuffle(TILE_COLORS));
  const [cells, setCells] = useState([{id:0, color: colors[0], className: "tile"},{id:1, color: colors[1], className: "tile"},{id:2, color: colors[2], className: "tile"},{id:3, color: colors[3], className: "tile"},{id:4, color: colors[4], className: "tile"},{id:5, color: colors[5], className: "tile"},{id:6, color: colors[6], className: "tile"},{id:7, color: colors[7], className: "tile"}]);


  const changeColor = (id) => {
     // 1. Find the todo with the provided id
    const currentCellIndex = cells.findIndex((cell) => cell.id === id);
  // 2. Change the className
    const updatedCells = Object.assign({}, cells[currentCellIndex]);
    updatedCells.className = "tile " + updatedCells.color;
  // 3. Update the cells
    const newCells = cells.slice();
    newCells[currentCellIndex] = updatedCells;
    setCells(newCells);

  }




  return (
    <>
      <h1>Memory</h1>
      <div className="board">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className={cell.className}
            onClick={() => changeColor(cell.id)}
          >
            {cell.color}
          </div>
        ))}
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
