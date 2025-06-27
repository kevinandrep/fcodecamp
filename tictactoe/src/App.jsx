import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "X",
  O: "O",
};

const COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    for (const combo of COMBO) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

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
          {board.map((item, index) => (
            <Square key={index} updateBoard={updateBoard} index={index}>
              {item}
            </Square>
          ))}
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        {winner !== null && (
          <section className="winner">
            <div className="text">
              {winner === false ? "Empate" : `El ganador es ${winner}`}
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Again</button>
              </footer>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
