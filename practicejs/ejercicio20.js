// 📝 Enunciado:

// Dado el texto:

// const text = "Aprender JavaScript mejora la lógica y potencia la creatividad";

// Usa reduce para crear un objeto con tres categorías:

// cortas → palabras con 3 letras o menos

// medianas → palabras con 4 a 6 letras

// largas → palabras con más de 6 letras

const text = "Aprender JavaScript mejora la lógica y potencia la creatividad";

const conteo = text.split(" ").reduce((acc, word) => {
  acc["cortas"] = acc["cortas"] || [];
  acc["medianas"] = acc["medianas"] || [];
  acc["largas"] = acc["largas"] || [];

  if (word.length <= 3) {
    acc["cortas"].push(word);
  } else if (word.length >= 4 && word.length <= 6) {
    acc["medianas"].push(word);
  } else {
    acc["largas"].push(word);
  }

  return acc;
}, {});
console.log(conteo);
