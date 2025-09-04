// 📝 Ejercicio: Contar la longitud de cada palabra

// 👉 Input:

// const text = "Aprender JavaScript es muy divertido";

// 👉 Output esperado:

// {
//   Aprender: 8,
//   JavaScript: 10,
//   es: 2,
//   muy: 3,
//   divertido: 9
// }

const text = "Aprender JavaScript es muy divertido";

let conteo = text.split(" ").reduce((acc, word) => {
  let len = word.length;
  acc[word] = acc[word] || len;
  return acc;
}, {});

console.log(conteo);
