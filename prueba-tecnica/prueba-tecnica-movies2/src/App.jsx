import { useState } from "react";
import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    getMovies({ search: newSearch });
  };

  const handleSort = (event) => {
    setSort(!sort);
  };

  return (
    <div>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="Search movies"
          ></input>
          <input type="checkbox" onChange={handleSort} checked={sort}></input>
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies}></Movies>}
      </main>
    </div>
  );
}

export default App;
