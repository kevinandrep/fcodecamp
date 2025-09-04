// 📝 Ejercicio:

// Tienes este texto:

// const text = "La práctica constante mejora las habilidades de programación";

// 👉 Debes usar reduce para contar cuántas palabras empiezan con cada letra (en minúsculas).

// 🔹 Input
// "La práctica constante mejora las habilidades de programación"

// 🔹 Output esperado
// {
//   l: 1,
//   p: 2,
//   c: 2,
//   m: 1,
//   h: 1,
//   d: 1
// }

const text = "La práctica constante mejora las habilidades de programación";

const conteo = text
  .toLocaleLowerCase()
  .split(" ")
  .reduce((acc, word) => {
    let firstLetter = word[0];
    acc[firstLetter] = (acc[firstLetter] || 0) + 1;
    return acc;
  }, {});

const orden = Object.keys(conteo)
  .sort()
  .reduce((acc, key) => {
    acc[key] = conteo[key];
    return acc;
  }, {});

console.log(orden);
