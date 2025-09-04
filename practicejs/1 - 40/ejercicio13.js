// 📝 Ejercicio:

// Dado el texto:

// const text = "JavaScript es un lenguaje poderoso y versátil";

// 👉 Usa .reduce para contar cuántas palabras tienen más de 5 letras y cuántas tienen 5 o menos.

// 🎯 Output esperado:
// {
//   cortas: 3,   // palabras con <= 5 letras
//   largas: 4    // palabras con > 5 letras
// }
const text = "JavaScript es un lenguaje poderoso y versátil";

const conteo = text.split(" ").reduce((acc, word) => {
  const len = word.length;
  if (len <= 5) {
    acc["cortas"] = (acc["cortas"] || 0) + 1;
  } else {
    acc["largas"] = (acc["largas"] || 0) + 1;
  }
  return acc;
}, {});

console.log(conteo);
