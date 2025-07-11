function ListOfMovies({ movies }) {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title}></img>
          </li>
        ))}
      </ul>
    </>
  );
}

function RenderNoResults() {
  return <p>No se encontraron peliculas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <ListOfMovies movies={movies}></ListOfMovies>
  ) : (
    <RenderNoResults></RenderNoResults>
  );
}
