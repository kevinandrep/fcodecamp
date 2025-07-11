import "./App.css";

import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input type="text" name="search" id="search" placeholder="Search" />
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
