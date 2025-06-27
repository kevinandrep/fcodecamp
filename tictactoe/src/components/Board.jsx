import { Square } from "./Square";

export function Board({ board, updateBoard }) {
  return (
    <>
      {" "}
      {board.map((item, index) => (
        <Square key={index} updateBoard={updateBoard} index={index}>
          {item}
        </Square>
      ))}
    </>
  );
}
