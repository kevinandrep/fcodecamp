// 👉 Ejercicio:
// Dado el texto:

// const text = "La programación mejora el pensamiento lógico y la creatividad";

// Crea un programa que cuente cuántas palabras comienzan con vocal (a, e, i, o, u) y cuántas con consonante.

// ✨ Ejemplo de salida esperada:
// { vocales: 3, consonantes: 6 }

const text = "La programación mejora el pensamiento lógico y la creatividad";

const conteo = text
  .toLowerCase()
  .split(" ")
  .reduce((acc, word) => {
    const firstLetter = word[0];
    if ("aeiou".includes(firstLetter)) {
      acc["vocales"] = (acc["vocales"] || 0) + 1;
    } else {
      acc["consonantes"] = (acc["consonantes"] || 0) + 1;
    }
    return acc;
  }, {});

console.log(conteo);
