// Ejercicio: 🎬 Lista de películas

// Tienes este array inicial de películas:

const peliculas = [
  { id: 1, titulo: "Inception", visto: true, etiquetas: ["ciencia ficción"] },
  { id: 2, titulo: "Titanic", visto: false, etiquetas: ["drama"] },
  { id: 3, titulo: "Avengers", visto: true, etiquetas: ["acción"] },
];

// 👉 Debes hacer lo siguiente paso a paso:

// Agregar una nueva película:

// { id: 4, titulo: "Interstellar", visto: false, etiquetas: ["espacio"] }
const peliculasAdd = [
  ...peliculas,
  { id: 4, titulo: "Interstellar", visto: false, etiquetas: ["espacio"] },
];

// Marcar como vista la película con id=2 (Titanic).
const peliculaVista = peliculasAdd.map((pelicula) =>
  pelicula.id === 2 ? { ...pelicula, visto: true } : pelicula
);

// Agregar la etiqueta "clásico" a la película con id=1 (Inception).
const peliculaClasico = peliculaVista.map((pelicula) =>
  pelicula.id === 1
    ? { ...pelicula, etiquetas: [...pelicula.etiquetas, "clasico"] }
    : pelicula
);

// Eliminar la película con id=3 (Avengers).
const peliculaDel = peliculaClasico.filter((pelicula) => pelicula.id !== 3);

console.log(peliculaDel);
