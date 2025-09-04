// Ejercicio

// Tienes un array de objetos que representan estudiantes con sus notas:

// const estudiantes = [
//   { nombre: "Ana", notas: [10, 8, 9] },
//   { nombre: "Luis", notas: [5, 6, 4] },
//   { nombre: "Marta", notas: [9, 9, 10] },
//   { nombre: "Pedro", notas: [7, 8, 7] }
// ];

// 👉 Tu tarea es:

// Calcular el promedio de cada estudiante.

// Filtrar solo los que tienen un promedio mayor o igual a 8.

// Crear un nuevo array solo con los nombres de esos estudiantes destacados.

// El resultado esperado sería:

const estudiantes = [
  { nombre: "Ana", notas: [10, 8, 9] },
  { nombre: "Luis", notas: [5, 6, 4] },
  { nombre: "Marta", notas: [9, 9, 10] },
  { nombre: "Pedro", notas: [7, 8, 7] },
];

const promedio = estudiantes.map((estudiante) => {
  const suma = estudiante.notas.reduce((acc, num) => (acc += num));
  const prom = suma / estudiante.notas.length;
  return { ...estudiante, prom };
});

const filtrado = promedio.filter((estudiante) => {
  return estudiante.prom >= 8;
});

const destacados = filtrado.map((estudiante) => {
  return estudiante.nombre;
});

console.log(destacados);
