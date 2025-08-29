import { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let status;

  const handleClick = (pos) => {
    setSquares((prevSquares) => {
      if (prevSquares[pos] || calculateWinner(prevSquares)) return prevSquares;

      const newSquares = prevSquares.slice();
      newSquares[pos] = xIsNext ? "X" : "O";
      return newSquares;
    });
    setXIsNext((prev) => !prev);
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square)) {
    status = "Draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          onSquareClick={() => handleClick(0)}
          value={squares[0]}
          className="square"
        ></Square>
        <Square
          onSquareClick={() => handleClick(1)}
          value={squares[1]}
          className="square"
        ></Square>
        <Square
          onSquareClick={() => handleClick(2)}
          value={squares[2]}
          className="square"
        ></Square>
      </div>
      <div className="board-row">
        <Square
          onSquareClick={() => handleClick(3)}
          value={squares[3]}
          className="square"
        ></Square>
        <Square
          onSquareClick={() => handleClick(4)}
          value={squares[4]}
          className="square"
        ></Square>
        <Square
          onSquareClick={() => handleClick(5)}
          value={squares[5]}
          className="square"
        ></Square>
      </div>
      <div className="board-row">
        <Square
          onSquareClick={() => handleClick(6)}
          value={squares[6]}
          className="square"
        ></Square>
        <Square
          onSquareClick={() => handleClick(7)}
          value={squares[7]}
          className="square"
        ></Square>
        <Square
          onSquareClick={() => handleClick(8)}
          value={squares[8]}
          className="square"
        ></Square>
      </div>
    </>
  );
}
