import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [index]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }
  console.log(pokemon);

  const handleAnterior = () => {
    if (index <= 1) return;
    setIndex((prev) => prev - 1);
  };

  const handleSiguiente = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleAnterior}>Anterior</button>
      <button onClick={handleSiguiente}>Siguiente</button>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default}></img>
    </div>
  );
}

export default App;
