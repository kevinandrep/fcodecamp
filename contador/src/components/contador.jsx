import { useState } from "react";

export function Contador() {
  const [counter, setCounter] = useState(0);

  const handleclick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <div>
        <p>{counter}</p>
      </div>
      <button onClick={handleclick}>Click</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}
