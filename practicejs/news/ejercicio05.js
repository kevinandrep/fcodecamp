const esPrimo = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const primosEnRango = (a, b) => {
  const resultado = [];
  for (let i = a; i <= b; i++) {
    if (esPrimo(i)) resultado.push(i);
  }
  return resultado;
};

console.log(primosEnRango(10, 20));
