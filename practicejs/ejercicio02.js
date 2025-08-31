// 📝 Ejercicio 2: Suma de dígitos

// Enunciado:
// Dado un número entero positivo n, calcula la suma de todos sus dígitos.

// Ejemplo 1:
// Input:

// 1234

// Output:

// 10

// (porque 1 + 2 + 3 + 4 = 10)

// Ejemplo 2:
// Input:

// 987

// Output:

// 24

let n = 987;

let suma = n
  .toString()
  .split("")
  .map(Number)
  .reduce((acc, d) => acc + d, 0);

console.log(suma);
