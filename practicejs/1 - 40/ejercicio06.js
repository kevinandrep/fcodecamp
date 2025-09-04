// 📝 Ejercicio: Contar palabras por longitud
// Input:
// const text = "Aprender JavaScript es realmente divertido";

// Output esperado:

// Un objeto donde la clave sea la longitud de la palabra, y el valor sea cuántas palabras tienen esa longitud.

// {
//   2: 1,   // "es"
//   8: 2,   // "Aprender", "divertido"
//   10: 1,  // "JavaScript"
//   11: 1   // "realmente"
// }

// 🧩 Pistas:

// Usa .split(" ") para separar las palabras.

// Recorre con .reduce y en cada iteración calcula palabra.length.

// Si esa longitud ya existe en acc, incrementa; si no, inicialízala en 1.

const text = "Aprender JavaScript es realmente divertido";

let conteo = text.split(" ").reduce((acc, word) => {
  const len = word.length;
  acc[len] = (acc[len] || 0) + 1;
  return acc;
}, {});

console.log(conteo);
