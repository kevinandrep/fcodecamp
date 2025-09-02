// 📝 Ejercicio:

// Tienes un estado con una lista de productos en un carrito.
// Cada producto tiene un id, nombre y cantidad.

// Agrega un producto nuevo al carrito sin modificar el original.

// Incrementa la cantidad de un producto específico (ej: el de id: 2).

// Elimina un producto por su id.

// 🔹 Código base
const carrito = [
  { id: 1, nombre: "Laptop", cantidad: 1 },
  { id: 2, nombre: "Mouse", cantidad: 2 },
  { id: 3, nombre: "Teclado", cantidad: 1 },
];

// // 1. Agregar producto nuevo (Auriculares, cantidad 1)

const nuevoCarrito = [
  ...carrito,
  { id: 4, nombre: "Auriculares", cantidad: 1 },
];

// // 2. Incrementar cantidad del producto con id: 2

const carritoActualizado = nuevoCarrito.map((prod) =>
  prod.id === 2 ? { ...prod, cantidad: prod.cantidad + 1 } : prod
);

// // 3. Eliminar producto con id: 1
const carritoFinal = carritoActualizado.filter((prod) => prod.id !== 1);

console.log(carritoFinal);
