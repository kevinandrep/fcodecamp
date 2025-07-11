import { useRef } from "react";
import "./App.css";

import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = new FormData(e.target);
    const query = fields.get("query");
    console.log(query);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="query" id="search" placeholder="Search" />
          <button type="input">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
