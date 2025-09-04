// Ejercicio: 📚 Lista de libros

// Tienes este array inicial:

const libros = [
  {
    id: 1,
    titulo: "El Quijote",
    autor: "Cervantes",
    leido: false,
    etiquetas: ["clásico"],
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "García Márquez",
    leido: true,
    etiquetas: ["realismo mágico"],
  },
  {
    id: 3,
    titulo: "1984",
    autor: "Orwell",
    leido: false,
    etiquetas: ["distopía"],
  },
];

// 👉 Debes realizar los siguientes pasos sin mutar el array original:

// Agregar un nuevo libro:

// { id: 4, titulo: "La Odisea", autor: "Homero", leido: false, etiquetas: ["épico"] }
const nuevoLibro = [
  ...libros,
  {
    id: 4,
    titulo: "La Odisea",
    autor: "Homero",
    leido: false,
    etiquetas: ["épico"],
  },
];

// Marcar como leído el libro con id=3 (1984).
const libroLeido = nuevoLibro.map((libro) =>
  libro.id === 3 ? { ...libro, leido: true } : libro
);

// Agregar la etiqueta "favorito" al libro con id=2.
const libroFav = libroLeido.map((libro) =>
  libro.id === 2
    ? { ...libro, etiquetas: [...libro.etiquetas, "favorito"] }
    : libro
);

// Eliminar el libro con id=1 (El Quijote).
const libroElim = libroFav.filter((libro) => libro.id !== 1);

// Mostrar el resultado final en consola.
console.log(libroElim);
