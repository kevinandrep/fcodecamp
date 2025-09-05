// 📌 Ejercicio – Películas

// Tienes este array de películas:

const peliculas = [
  { id: 1, titulo: "Inception", duracion: 148, genero: "Ciencia Ficción" },
  { id: 2, titulo: "Titanic", duracion: 195, genero: "Romance" },
  { id: 3, titulo: "Toy Story", duracion: 81, genero: "Animación" },
  { id: 4, titulo: "El Padrino", duracion: 175, genero: "Drama" },
];

// 👉 Con un único reduce, debes:
const final = peliculas.reduce(
  (acc, pelicula) => {
    // Calcular un campo corta: true si la película dura menos de 100 minutos.
    let copiaPelicula = { ...pelicula };
    if (copiaPelicula.duracion < 100) copiaPelicula.corta = true;

    // Calcular un campo larga: true si la película dura más de 180 minutos.
    if (copiaPelicula.duracion > 180) copiaPelicula.larga = true;

    // Agrupar las películas por género en peliculasPorGenero.
    acc.peliculasPorGenero[copiaPelicula.genero] =
      acc.peliculasPorGenero.genero || [];
    acc.peliculasPorGenero[copiaPelicula.genero].push(copiaPelicula);

    // Calcular totalDuracion, la suma de todas las duraciones.
    acc.totalDuracion += copiaPelicula.duracion;

    // Guardar todas las películas procesadas en peliculasProcesadas.
    acc.peliculasProcesadas.push(copiaPelicula);
    return acc;
  },
  {
    peliculasPorGenero: {
      "Ciencia Ficción": [],
      Romance: [],
      Animación: [],
      Drama: [],
    },
    peliculasProcesadas: [],
    totalDuracion: 0,
  }
);

console.dir(final, { depth: null });
