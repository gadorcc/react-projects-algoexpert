import React from 'react';
import { useState, useEffect} from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

function Memory() {

  const colors = shuffle(TILE_COLORS).concat(shuffle(TILE_COLORS));
  const [cells, setCells] = useState([{id:0, color: colors[0], className: "tile"},{id:1, color: colors[1], className: "tile"},{id:2, color: colors[2], className: "tile"},{id:3, color: colors[3], className: "tile"},{id:4, color: colors[4], className: "tile"},{id:5, color: colors[5], className: "tile"},{id:6, color: colors[6], className: "tile"},{id:7, color: colors[7], className: "tile"}]);
  const [clicks, setClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [previousCell, setPreviousCell] = useState({});
  const [originalCells, setOriginalCells] = useState(cells);
  const [heading, setHeading] = useState("Memory");
  const [ button, setButton] = useState(null);
  const refresh = () => window.location.reload(true);


  const changeColor = (id) => {
    if (clicks === 0) {
        // 1. Find the todo with the provided id
      const currentCellIndex = cells.findIndex((cell) => cell.id === id);
    // 2. Change the className
      const updatedCells = Object.assign({}, cells[currentCellIndex]);
      updatedCells.className = "tile " + updatedCells.color;
    // 3. Update the cells
      const newCells = cells.slice();
      newCells[currentCellIndex] = updatedCells;
      setOriginalCells(cells)
      setCells(newCells);
      console.log(updatedCells.color)
      setPreviousCell(updatedCells)
      setClicks(clicks + 1)

    } if( clicks === 1) {
           // 1. Find the todo with the provided id
        const currentCellIndex = cells.findIndex((cell) => cell.id === id);
    // 2. Change the className
        const updatedCells = Object.assign({}, cells[currentCellIndex]);
        updatedCells.className = "tile " + updatedCells.color;
    // 3. Update the cells
        const newCells = cells.slice();
        newCells[currentCellIndex] = updatedCells;
        if(previousCell.color === updatedCells.color) {
          setCells(newCells);
          setTotalClicks(totalClicks + 1)
          console.log(previousCell.color === updatedCells.color)
          if(totalClicks === 3){
            setHeading("You Win!");
            setButton(<button onClick={refresh}>Restart</button>);
          }

        }else{
          setCells(newCells)
          setTimeout(() => {
            setCells(originalCells)
          }, 1000);
        }
        setClicks(0);
    }
  }



  return (
    <>
      <h1>{heading}</h1>
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
          {button}
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
