// 📝 Enunciado:

// Dado el texto:

// const text = "La práctica constante mejora las habilidades de programación";

// Usa reduce para crear un objeto que cuente cuántas palabras empiezan con cada vocal (a, e, i, o, u).

const text =
  "La práctica ana constante espejo mejora las uron uraño habilidades de programación";

const conteo = text
  .toLowerCase()
  .split(" ")
  .reduce((acc, word) => {
    const first = word[0];

    if ("aeiou".includes(first)) {
      acc[first] = (acc[first] || 0) + 1;
    }
    return acc;
  }, {});

console.log(conteo);
