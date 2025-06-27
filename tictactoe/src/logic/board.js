import { COMBO } from "../constants";

export const checkWinner = (newBoard) => {
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
