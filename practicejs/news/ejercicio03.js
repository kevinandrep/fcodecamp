let arreglo = [8, 1, 3, 2, 2, 5, 3, 3, 1];

const numeroMasFrecuente = (arr) => {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let maxFrecuencia = 0;
  let resultado = null;

  for (let num in freq) {
    if (
      freq[num] > maxFrecuencia ||
      (freq[num] === maxFrecuencia && Number(num) < resultado)
    ) {
      maxFrecuencia = freq[num];
      resultado = Number(num);
    }
  }
  return resultado;
};

console.log(numeroMasFrecuente(arreglo));
