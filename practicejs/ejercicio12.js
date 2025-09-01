// 📌 Ejercicio:
// Dado el texto:

// const text = "Los estudiantes practican programación todos los días";

// 👉 Agrupa las palabras por su última letra y guárdalas en un objeto.

// 🔹 Output esperado:

// {
//   s: ["Los", "estudiantes", "todos", "días"],
//   n: ["practican"],
//   ó: ["programación"]
// }

const text = "Los estudiantes practican programación todos los días";

const conteo = text.split(" ").reduce((acc, word) => {
  let lastWord = word[word.length - 1];
  acc[lastWord] = acc[lastWord] || [];
  acc[lastWord].push(word);
  return acc;
}, {});

console.log(conteo);
