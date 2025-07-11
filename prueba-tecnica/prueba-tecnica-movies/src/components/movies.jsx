function ListOfMovies({ movies }) {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title}></img>
          </li>
        ))}
      </ul>
    </>
  );
}

function renderNoResults() {
  return <p>No se encontraron peliculas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <ListOfMovies movies={movies}></ListOfMovies>
  ) : (
    <renderNoResults></renderNoResults>
  );
}
