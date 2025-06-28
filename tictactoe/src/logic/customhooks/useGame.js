import { useState } from "react";
import { TURNS } from "../../constants";
import { resetGameStorage, saveGame } from "../storage";
import { checkWinner } from "../board";

export function useGame() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const checkGameOver = (newBoard) => {
    return newBoard.every((item) => item !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar qui partida
    saveGame({
      board: newBoard,
      turn: newTurn,
    });

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
    resetGameStorage();
  };

  return {
    board,
    turn,
    winner,
    updateBoard,
    resetGame,
    isActive,
    setIsActive,
    position,
    setPosition,
  };
}
