// 📝 Ejercicio

// Dado el texto:

// const text = "La práctica constante mejora las habilidades de programación";

// 👉 Usa .reduce() para obtener un objeto donde las claves sean las longitudes de las palabras y los valores sean arrays con todas las palabras que tengan esa longitud.

// 🎯 Output esperado
// {
//   2: ["La", "de"],
//   8: ["práctica", "mejora"],
//   9: ["constante"],
//   3: ["las"],
//   11: ["habilidades"],
//   14: ["programación"]
// }

const text = "La práctica constante mejora las habilidades de programación";

let conteo = text.split(" ").reduce((acc, word) => {
  let len = word.length;
  acc[len] = acc[len] || [];
  acc[len].push(word);
  return acc;
}, {});

console.log(conteo);
