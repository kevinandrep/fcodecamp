let arreglo = [1, 2, 3, 4, 5, 6];

let k = 1;

rotarArreglo = (arreglo) => {
  k = k % arreglo.length;
  return arreglo.slice(-k).concat(arreglo.slice(0, -k));
};

prueba = (arreglo) => {
  return arreglo.slice(-52);
};

// console.log(rotarArreglo(arreglo));

console.log(prueba(arreglo));
