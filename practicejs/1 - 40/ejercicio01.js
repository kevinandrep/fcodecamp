// Input esperado (ejemplo):

// 10

// Output esperado:

// 2 4 6 8 10

// Input esperado (ejemplo 2):

// 7

// Output esperado:

// 2 4 6

// Dado un número entero positivo n, imprime todos los números pares desde 1 hasta n inclusive.

let n = 7;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
