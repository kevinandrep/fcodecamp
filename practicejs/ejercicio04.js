// 📝 Ejercicio 4: Agrupar por primera letra

// Enunciado:
// Dada una lista de palabras, agrúpalas en un objeto según su primera letra.

// Ejemplo 1:
// Input:

// ["hola", "mundo", "javascript", "react", "ruby"]

// Output:

// {
//   h: ["hola"],
//   m: ["mundo"],
//   j: ["javascript"],
//   r: ["react", "ruby"]
// }

let palabras = ["hola", "mundo", "javascript", "react", "ruby"];

let agrupadas = palabras.reduce((acc, word) => {
  let inicial = word[0];

  if (!acc[inicial]) {
    acc[inicial] = [];
  }

  acc[inicial].push(word);

  return acc;
}, {});

console.log(agrupadas);
