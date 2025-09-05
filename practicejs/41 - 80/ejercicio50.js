// 📌 Ejercicio – Cursos y estudiantes

// Tienes este array de cursos:

const cursos = [
  {
    id: 1,
    nombre: "Matemáticas",
    estudiantes: [
      { nombre: "Ana", nota: 18 },
      { nombre: "Luis", nota: 12 },
    ],
  },
  {
    id: 2,
    nombre: "Historia",
    estudiantes: [
      { nombre: "Marta", nota: 15 },
      { nombre: "Pedro", nota: 19 },
    ],
  },
  {
    id: 3,
    nombre: "Ciencias",
    estudiantes: [
      { nombre: "Lucía", nota: 20 },
      { nombre: "Carlos", nota: 14 },
    ],
  },
];

// 👉 Con un único reduce, debes:
const final = cursos.reduce(
  (acc, curso) => {
    // En cada estudiante, calcular un campo aprobado: true si su nota es mayor o igual a 13.
    let copiaCurso = { ...curso };
    copiaCurso.estudiantes = copiaCurso.estudiantes.map((estudiante) =>
      estudiante.nota > 13 ? { ...estudiante, aprobado: true } : estudiante
    );

    // En cada curso, calcular un campo promedioCurso con el promedio de las notas de sus estudiantes.
    const promedioCurso =
      copiaCurso.estudiantes.reduce(
        (sum, estudiante) => (sum += estudiante.nota),
        0
      ) / copiaCurso.estudiantes.length;

    copiaCurso.promedioCurso = promedioCurso;

    // Si promedioCurso > 16, marcar el curso como destacado: true.
    if (promedioCurso > 16) copiaCurso.destacado = true;

    // Acumular en totalNotas la suma de todas las notas de todos los cursos.
    acc.totalNotas += copiaCurso.estudiantes.reduce(
      (sum, estudiante) => (sum += estudiante.nota),
      0
    );

    // Guardar todo en un objeto con la forma:
    acc.cursosProcesados.push(copiaCurso);
    return acc;
  },
  { cursosProcesados: [], totalNotas: 0 }
);

console.dir(final, { depth: null });
