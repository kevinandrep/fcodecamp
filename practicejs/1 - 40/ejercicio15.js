// Perfecto 🚀.
// Aquí tienes el nuevo ejercicio:

// 👉 Ejercicio:
// Cuenta cuántas palabras de un texto empiezan con mayúscula y cuántas empiezan con minúscula.

// Ejemplo con el texto:

// "JavaScript es Un Lenguaje muy Popular"

// La salida esperada sería:

// { mayusculas: 3, minusculas: 3 }}

const text = "JavaScript es Un Lenguaje muy Popular";

const conteo = text.split(" ").reduce((acc, word) => {
  const firstLetter = word[0];
  if (firstLetter === firstLetter.toUpperCase()) {
    acc["mayusculas"] = (acc["mayusculas"] || 0) + 1;
  } else {
    acc["minusculas"] = (acc["minusculas"] || 0) + 1;
  }

  return acc;
}, {});

console.log(conteo);
