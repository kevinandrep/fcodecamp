// 📝 Ejercicio propuesto

// Problema:
// Escribe una función que, dado un texto (string), cuente cuántas veces aparece cada vocal (a, e, i, o, u) y devuelva un objeto con esos conteos.

// 🔹 Input esperado:
// const texto = "javascript es divertido";

// 🔹 Output esperado:
// {
//   a: 2,
//   e: 2,
//   i: 3,
//   o: 1,
//   u: 1
// }

const text = "Javascript es divertido";

let conteo = text
  .toUpperCase()
  .split("")
  .reduce((acc, letter) => {
    if ("AEIOU".includes(letter)) {
      acc[letter] = (acc[letter] || 0) + 1;
    }
    return acc;
  }, {});

let ordenado = Object.keys(conteo)
  .sort()
  .reduce((acc, key) => {
    acc[key] = conteo[key];
    return acc;
  }, {});

console.log(ordenado);
