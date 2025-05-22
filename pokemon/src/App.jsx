import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/9`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }
  console.log(pokemon);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange}></input>
        <button>buscar</button>
      </form>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default}></img>
    </div>
  );
}

export default App;
