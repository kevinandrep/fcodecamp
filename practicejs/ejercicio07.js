// 🔹 Ejercicio propuesto:

// Dado el texto:

// "Los estudiantes de programación practican código todos los días"

// 👉 Tarea:
// Cuenta cuántas veces aparece cada palabra en el texto (sin importar mayúsculas/minúsculas).

// 📌 Input:
// "Los estudiantes de programación practican código todos los días"

// 📌 Output esperado:
// {
//   los: 2,
//   estudiantes: 1,
//   de: 1,
//   programación: 1,
//   practican: 1,
//   código: 1,
//   todos: 1,
//   días: 1
// }

const text = "Los estudiantes de programación practican código todos los días";

let conteo = text.toLocaleLowerCase();

console.log(conteo);
