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

// Marcar como vista la película con id=2 (Titanic).

// Agregar la etiqueta "clásico" a la película con id=1 (Inception).

// Eliminar la película con id=3 (Avengers).

const final = [
  ...peliculas,
  { id: 4, titulo: "Interstellar", visto: false, etiquetas: ["espacio"] },
]
  .map((pelicula) => {
    if (pelicula.id === 2) return { ...pelicula, visto: true };
    if (pelicula.id === 1)
      return { ...pelicula, etiquetas: [...pelicula.etiquetas, "clasico"] };
    return pelicula;
  })
  .filter((pelicula) => pelicula.id !== 3);

console.log(final);
