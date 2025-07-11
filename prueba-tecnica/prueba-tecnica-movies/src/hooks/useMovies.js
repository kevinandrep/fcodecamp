import responseMovies from "../mocks/withresults.json";

export function useMovies() {
  const movies = responseMovies.Search;
  const mapedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mapedMovies };
}
