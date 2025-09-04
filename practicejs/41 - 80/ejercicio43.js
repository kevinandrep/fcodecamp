// 📌 Ejercicio – Biblioteca de libros

// Tienes este array:

const biblioteca = [
  {
    id: 1,
    autor: "Gabriel García Márquez",
    libros: [
      { titulo: "Cien años de soledad", paginas: 500 },
      { titulo: "El coronel no tiene quien le escriba", paginas: 120 },
    ],
    disponible: true,
  },
  {
    id: 2,
    autor: "Isabel Allende",
    libros: [
      { titulo: "La casa de los espíritus", paginas: 400 },
      { titulo: "Eva Luna", paginas: 300 },
    ],
    disponible: false,
  },
  {
    id: 3,
    autor: "Mario Vargas Llosa",
    libros: [
      { titulo: "La ciudad y los perros", paginas: 450 },
      { titulo: "Conversación en La Catedral", paginas: 600 },
    ],
    disponible: true,
  },
];

// 👉 Con un único reduce, debes hacer lo siguiente:

const final = biblioteca.reduce(
  (acc, autor) => {
    // Ignorar al autor con id = 2.
    if (autor.id === 2) return acc;

    // En cada libro, calcular un campo nuevo denso = true si tiene más de 300 páginas.
    let nuevoAutor = { ...autor };
    nuevoAutor.libros = nuevoAutor.libros.map((libro) => {
      return { ...libro, denso: libro.paginas > 300 };
    });

    // En cada autor, calcular un campo totalPaginas con la suma de páginas de sus libros.
    nuevoAutor.totalPaginas = nuevoAutor.libros.reduce((suma, libro) => {
      return (suma += libro.paginas);
    }, 0);

    // Si totalPaginas > 800, marcar al autor como prolífico: true.
    if (nuevoAutor.totalPaginas > 800) nuevoAutor.prolifico = true;

    // Sumar en paginasDisponibles todas las páginas de los autores con disponible: true.
    if (nuevoAutor.disponible)
      acc.paginasDisponibles += nuevoAutor.totalPaginas;
    // El resultado final debe ser un objeto con la forma:

    acc.autoresProcesados.push(nuevoAutor);
    return acc;
  },
  {
    autoresProcesados: [],
    paginasDisponibles: 0,
  }
);

console.log(final);
