import { useState } from "react";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinner } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import "./App.css";
import { Board } from "./components/Board.jsx";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkGameOver = (newBoard) => {
    return newBoard.every((item) => item !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkGameOver(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  };
  return (
    <>
      <main className="board">
        <section className="game">
          <Board board={board} updateBoard={updateBoard}></Board>
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
