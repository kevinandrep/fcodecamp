import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { WinnerModal } from "./components/WinnerModal.jsx";
import "./App.css";
import { Board } from "./components/Board.jsx";
import { Pointer } from "./components/Pointer.jsx";
import { useGame } from "./logic/customhooks/useGame.js";
import { useEffect } from "react";

function App() {
  const {
    board,
    turn,
    winner,
    updateBoard,
    resetGame,
    isActive,
    setIsActive,
    position,
    setPosition,
  } = useGame();

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (isActive) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => window.removeEventListener("pointermove", handleMove);
  }, [isActive, setPosition]);

  return (
    <>
      <main className="board">
        <button onClick={resetGame}>Reset</button>
        <section className="game">
          <Board board={board} updateBoard={updateBoard}></Board>
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        <section>
          <Pointer isActive={isActive} position={position} />

          <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Desactivar" : "Activar"}
          </button>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
