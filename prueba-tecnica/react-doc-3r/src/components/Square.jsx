import { useState } from "react";

export function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        style={{ width: "80px", height: "80px", margin: "3px" }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
