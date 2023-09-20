import React, { useState } from "react";
import Square from "./Square";

function Board({xIsNext, squares, onPlay}) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    const nextSquares = squares.slice();

    // check if the value is already set
    if (nextSquares[index] || calculateWinner(squares)) return;

    nextSquares[index] = xIsNext ? "X" : "O";
    
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Game Over! Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              value={square}
              onSquareClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Board;
