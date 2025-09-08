let cadena = "radar";

const esPalindromo = (str) => {
  str = str.toLowerCase();
  let invertida = str.split("").reverse().join("");
  return str === invertida ? "YES" : "NO";
};

console.log(esPalindromo(cadena));

// console.log(esPalindromo);
