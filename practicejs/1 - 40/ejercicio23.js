// 📝 Ejercicio 16 (más complejo):

// Dado el texto:

// const text = "Aprender JavaScript mejora la lógica y potencia la creatividad";

// Usa reduce para crear un objeto con tres propiedades:

// vocalesIniciales → palabras que empiezan con vocal (a, e, i, o, u)

// consonantesIniciales → palabras que empiezan con consonante

// palabrasLargas → palabras con más de 7 letras

// Nota: una palabra puede aparecer en más de una categoría si cumple varias condiciones.

const numbers = [4, 7, 2, 9, 10, 3, 6];

const pares = numbers.filter((num) => num % 2 === 0);
const suma = pares.reduce((acc, num) => {
  acc += num;
  return acc;
}, 0);

const prom = suma / pares.length;

console.log(prom);
