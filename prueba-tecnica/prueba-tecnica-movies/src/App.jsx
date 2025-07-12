import { useEffect, useRef, useState } from "react";
import "./App.css";

import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("no se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("no se puede buscar un numero");
      return;
    }
    if (search.length < 3) {
      setError("la busqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
};

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    updateSearch(newQuery);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="query"
            value={search}
            placeholder="Search"
          />
          <button type="input">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
