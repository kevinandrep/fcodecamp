import { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (pos) => {
    setSquares((prevSquares) => {
      if (prevSquares[pos]) return prevSquares;
      const newSquares = prevSquares.slice();
      newSquares[pos] = xIsNext ? "X" : "O";
      return newSquares;
    });
    setXIsNext((prev) => !prev);
  };

  return (
    <>
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
