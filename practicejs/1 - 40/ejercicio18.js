// 👉 Enunciado:
// Dado un texto, cuenta cuántas palabras empiezan y terminan con la misma letra.

// Ejemplo:

// "ana ama la programación en java"

// "ana" empieza y termina con "a"

// "ama" empieza y termina con "a"

// "java" empieza y termina con "a"

text = "ana ama la programación en java";

const conteo = text.split(" ").reduce((acc, word) => {
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];

  if (firstLetter === lastLetter) {
    acc["mismas"] = (acc["mismas"] || 0) + 1;
  }

  return acc;
}, {});

console.log(conteo);
