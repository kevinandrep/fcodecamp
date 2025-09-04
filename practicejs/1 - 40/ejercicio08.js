// 📝 Enunciado

// Tienes el siguiente texto:

// "La programación en JavaScript es poderosa y la práctica constante mejora las habilidades de programación"

// 👉 Debes usar .reduce() para contar cuántas veces aparece cada palabra, pero esta vez:

// Ignora las mayúsculas/minúsculas → usa todo en minúsculas.

// Quita acentos para que "programación" y "programacion" se consideren iguales.

// El output esperado es un objeto con la frecuencia de cada palabra.

// 🎯 Output esperado
// {
//   la: 2,
//   programacion: 2,
//   en: 1,
//   javascript: 1,
//   es: 1,
//   poderosa: 1,
//   y: 1,
//   practica: 1,
//   constante: 1,
//   mejora: 1,
//   las: 1,
//   habilidades: 1,
//   de: 1
// }

const text =
  "La programación en JavaScript es poderosa y la práctica constante mejora las habilidades de programación";

let conteo = text
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .split(" ")
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

console.log(conteo);
// console.log(text);
