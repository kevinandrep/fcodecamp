// 📝 Ejercicio 3: Contar palabras

// Enunciado:
// Dada una oración como string, cuenta cuántas veces aparece cada palabra.

// Ejemplo 1:
// Input:

// "hola mundo hola javascript"

// Output:

// { hola: 2, mundo: 1, javascript: 1 }

// Ejemplo 2:
// Input:

// "js js js react node react"

// Output:

// { js: 3, react: 2, node: 1 }
let sentence = "js js js react node react";

let count = sentence.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(count);
