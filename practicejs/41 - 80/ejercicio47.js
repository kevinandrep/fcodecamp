// 📌 Ejercicio – Notas de estudiantes

// Tienes este array:

const estudiantes = [
  {
    id: 1,
    nombre: "Ana",
    notas: [15, 18, 20],
  },
  {
    id: 2,
    nombre: "Luis",
    notas: [10, 12, 14],
  },
  {
    id: 3,
    nombre: "Marta",
    notas: [19, 20, 18],
  },
];

// 👉 Con un único reduce, debes:
const final = estudiantes.reduce(
  (acc, estudiante) => {
    // Calcular el promedio de cada estudiante.
    let copiaEstudiante = { ...estudiante };
    copiaEstudiante.promedio =
      copiaEstudiante.notas.reduce((suma, nota) => {
        return (suma += nota);
      }, 0) / copiaEstudiante.notas.length;

    // Si el promedio es mayor a 17, marcarlo como destacado: true.
    if (copiaEstudiante.promedio > 17) copiaEstudiante.destacado = true;

    // Sumar todas las notas de todos los estudiantes en totalGeneral.
    acc.totalGeneral += copiaEstudiante.notas.reduce(
      (suma, nota) => (suma += nota),
      0
    );

    acc.estudiantesProcesados.push(copiaEstudiante);
    return acc;
  },
  {
    estudiantesProcesados: [],
    totalGeneral: 0,
  }
);

console.dir(final, { depth: null });
