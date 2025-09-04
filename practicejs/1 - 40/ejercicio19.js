// 📝 Ejercicio 12:

// Dado el texto:

// const text = "JavaScript aprende rápido mientras practicas mucho";

// 👉 Usa reduce para separar las palabras en dos arrays:

// Palabras con más de 5 letras → largas

// Palabras con 5 o menos letras → cortas

const text = "JavaScript aprende rápido mientras practicas mucho";

const conteo = text.split(" ").reduce((acc, word) => {
  acc["largas"] = acc["largas"] || [];
  acc["cortas"] = acc["cortas"] || [];

  word.length > 5 ? acc["largas"].push(word) : acc["cortas"].push(word);

  return acc;
}, {});

console.log(conteo);
