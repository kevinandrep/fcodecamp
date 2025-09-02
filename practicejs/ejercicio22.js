// 📝 Enunciado:

// Dado el texto:

// const text = "Aprender JavaScript es divertido y desafiante";

// Usa reduce para crear un objeto que clasifique las palabras según su longitud:

// cortas → palabras con 3 letras o menos

// medianas → palabras con 4 a 6 letras

// largas → palabras con más de 6 letras

// Además, en lugar de solo contar, guarda las palabras en arrays.

const text = "Aprender JavaScript es divertido y desafiante";

const conteo = text
  .toLocaleLowerCase()
  .split(" ")
  .reduce((acc, word) => {
    const inicial = word[0];
    const len = word.length;

    acc["vocalesIniciales"] = acc["vocalesIniciales"] || [];
    acc["consonantesIniciales"] = acc["consonantesIniciales"] || [];
    acc["palabrasLargas"] = acc["palabrasLargas"] || [];

    if ("aeiou".includes(inicial)) {
      acc["vocalesIniciales"].push(word);
      if (len > 7) {
        acc["palabrasLargas"].push(word);
      }
    } else {
      acc["consonantesIniciales"].push(word);
      if (len > 7) {
        acc["palabrasLargas"].push(word);
      }
    }
    return acc;
  }, {});

console.log(conteo);
