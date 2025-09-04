// 👉 Ejercicio 10:
// Cuenta cuántas palabras del texto tienen más de 7 letras.

// Ejemplo con este texto:

// La programación permite resolver problemas de manera eficiente

// ➡️ La salida esperada sería:

// { largas: 2 }   // "programación", "eficiente"

const text = "La programación permite resolver problemas de manera eficiente";

const conteo = text.split(" ").reduce((acc, word) => {
  if (word.length > 7) {
    acc["largas"] = (acc["largas"] || 0) + 1;
  }

  return acc;
}, {});

console.log(conteo);
