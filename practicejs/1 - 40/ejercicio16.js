// 👉 Ejercicio:
// Cuenta cuántas palabras del texto tienen una longitud par y cuántas tienen una longitud impar.

// Ejemplo con:

// "La lógica es esencial en programación"

// Salida esperada:

// { pares: 3, impares: 3 }

const texto = "La lógica es esencial en programación del";

const conteo = texto.split(" ").reduce((acc, word) => {
  if (word.length % 2 === 0) {
    acc["pares"] = (acc["pares"] || 0) + 1;
  } else {
    acc["impares"] = (acc["impares"] || 0) + 1;
  }
  return acc;
}, {});

console.log(conteo);
