// 📌 Ejercicio – Alumnos y cursos

// Tienes este array de alumnos con sus cursos y notas:

const alumnos = [
  { id: 1, nombre: "Ana", notas: [18, 15, 20], curso: "Matemáticas" },
  { id: 2, nombre: "Luis", notas: [12, 14, 10], curso: "Historia" },
  { id: 3, nombre: "Marta", notas: [16, 19, 17], curso: "Matemáticas" },
  { id: 4, nombre: "Pedro", notas: [11, 9, 13], curso: "Historia" },
];

// 👉 Con un único reduce, debes:
const final = alumnos.reduce(
  (acc, alumno) => {
    // Calcular un campo promedio para cada alumno.
    let copiaAlumno = { ...alumno };

    copiaAlumno.promedio =
      copiaAlumno.notas.reduce((suma, nota) => (suma += nota), 0) /
      copiaAlumno.notas.length;

    // Si el promedio >= 13, marcar al alumno como aprobado: true.
    if (copiaAlumno.promedio >= 13) copiaAlumno.aprobado = true;

    // Guardar todos los alumnos procesados en alumnosProcesados.
    acc.alumnosProcesados.push(copiaAlumno);

    // Calcular promedioGeneral (promedio de todas las notas de todos los alumnos).

    acc.promedioGeneral += copiaAlumno.promedio;
    // Agrupar a los alumnos por curso dentro de alumnosPorCurso.
    acc.alumnosPorCurso[copiaAlumno.curso] =
      acc.alumnosPorCurso[copiaAlumno.curso] || [];
    acc.alumnosPorCurso[copiaAlumno.curso].push(copiaAlumno);
    return acc;
  },
  { alumnosProcesados: [], promedioGeneral: 0, alumnosPorCurso: {} }
);

console.dir(final, { depth: null });
