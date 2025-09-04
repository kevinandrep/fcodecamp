// 🔹 Ejercicio: Gestión de cursos

// Tienes este array inicial:

const cursos = [
  { id: 1, nombre: "JavaScript", alumnos: 20, etiquetas: ["programación"] },
  { id: 2, nombre: "Inglés", alumnos: 15, etiquetas: ["idiomas"] },
  { id: 3, nombre: "Matemáticas", alumnos: 25, etiquetas: ["ciencia"] },
];

// 👉 Debes hacer lo siguiente paso a paso:

// Agregar un nuevo curso:

// { id: 4, nombre: "Historia", alumnos: 10, etiquetas: ["humanidades"] }

// Incrementar en +5 los alumnos del curso con id=1 (JavaScript).

// Agregar la etiqueta "avanzado" al curso con id=3 (Matemáticas).

// Eliminar el curso con id=2 (Inglés).

const final = [
  ...cursos,
  { id: 4, nombre: "Historia", alumnos: 10, etiquetas: ["humanidades"] },
]
  .map((curso) => {
    if (curso.id === 1) return { ...curso, alumnos: curso.alumnos + 5 };
    if (curso.id === 3)
      return { ...curso, etiquetas: [...curso.etiquetas, "avanzado"] };
    return curso;
  })
  .filter((curso) => curso.id !== 2);

console.log(final);
