import "./App.css";

import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/with-no-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Search movies"></input>
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title}></img>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron peliculas</p>
        )}
      </main>
    </div>
  );
}

export default App;
