// 📌 Ejercicio – Biblioteca

// Tienes este array de libros:

const libros = [
  {
    id: 1,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
  },
  { id: 3, titulo: "Don Quijote", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 4, titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124 },
];

// 👉 Con un único reduce, debes:
const final = libros.reduce(
  (acc, libro) => {
    // Calcular un campo corto: true en cada libro si tiene menos de 150 páginas.
    let copiaLibro = { ...libro };
    if (copiaLibro.paginas < 150) copiaLibro.corto = true;

    // Calcular un campo largo: true si tiene más de 500 páginas.
    if (copiaLibro.paginas > 500) copiaLibro.largo = true;

    // Acumular en totalPaginas la suma de todas las páginas de todos los libros.
    acc.totalPaginas += copiaLibro.paginas;

    // Guardar en librosProcesados el array de libros con los nuevos campos agregados.
    acc.librosProcesados.push(copiaLibro);
    return acc;
  },
  { librosProcesados: [], totalPaginas: 0 }
);

console.dir(final, { depth: null });
